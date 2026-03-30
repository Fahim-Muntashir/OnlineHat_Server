// src/modules/payment/payment.service.ts
import SSLCommerzPayment from "sslcommerz-lts";
import { v4 as uuidv4 } from "uuid";
import { prisma } from "../../lib/prisma";

const store_id = process.env.SSLCOMMERZ_STORE_ID as string;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD as string;
const is_live = process.env.SSLCOMMERZ_IS_LIVE === "true";

// ─── INITIATE PAYMENT ────────────────────────────────────────────────
const initiatePayment = async (orderId: string): Promise<{ url: string }> => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      buyer: { include: { user: true } },
      service: true,
      package: true,
    },
  });

  if (!order) throw new Error("Order not found");

  const existingPayment = await prisma.payment.findUnique({
    where: { orderId },
  });

  if (existingPayment?.status === "SUCCESS") {
    throw new Error("Order already paid");
  }

  const tran_id = uuidv4();

  const data = {
    total_amount: order.price,
    currency: "BDT",
    tran_id,
    success_url: `${process.env.BASE_URL}/payment/success/${orderId}`,
    fail_url: `${process.env.BASE_URL}/payment/fail/${orderId}`,
    cancel_url: `${process.env.BASE_URL}/payment/cancel/${orderId}`,
    cus_name: order.buyer.user.name,
    cus_email: order.buyer.user.email,
    cus_phone: order.buyer.phone ?? "01700000000",
    cus_add1: order.buyer.address ?? "Dhaka",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",

    product_name: order.service.title,
    product_category: "Service",
    product_profile: "general",

    shipping_method: "NO",
    num_of_item: 1,
  };

  await prisma.payment.upsert({
    where: { orderId },
    update: { status: "PENDING", provider: tran_id },
    create: {
      orderId,
      amount: order.price,
      status: "PENDING",
      provider: tran_id,
    },
  });

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  const apiResponse = await sslcz.init(data);

  if (!apiResponse?.GatewayPageURL) {
    throw new Error("Failed to get payment gateway URL");
  }

  return { url: apiResponse.GatewayPageURL };
};

// ─── SUCCESS ─────────────────────────────────────────────────────────
// const handleSuccess = async (
//   orderId: string,
//   body: Record<string, string>,
// ): Promise<string> => {
//   const { val_id, status } = body;

//   if (status !== "VALID" && status !== "VALIDATED") {
//     throw new Error("Invalid payment status from SSLCommerz");
//   }

//   // ✅ Skip validation in development to avoid sandbox issues
//   if (process.env.NODE_ENV !== "production") {
//     await prisma.payment.update({
//       where: { orderId },
//       data: { status: "SUCCESS" },
//     });

//     await prisma.order.update({
//       where: { id: orderId },
//       data: { status: "IN_PROGRESS" },
//     });

//     return `${process.env.CLIENT_URL}/payment/success?orderId=${orderId}`;
//   }

//   // Production — full validation
//   const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
//   const validation = await sslcz.validate({ val_id });

//   if (validation.status !== "VALID" && validation.status !== "VALIDATED") {
//     throw new Error("Payment validation failed");
//   }

//   await prisma.payment.update({
//     where: { orderId },
//     data: { status: "SUCCESS" },
//   });

//   await prisma.order.update({
//     where: { id: orderId },
//     data: { status: "IN_PROGRESS" },
//   });

//   return `${process.env.CLIENT_URL}/payment/success?orderId=${orderId}`;
// };
// Task: For development
const handleSuccess = async (
  orderId: string,
  body: Record<string, string>,
): Promise<string> => {
  // ✅ In dev — skip gateway validation entirely
  await prisma.payment.update({
    where: { orderId },
    data: { status: "SUCCESS" },
  });

  await prisma.order.update({
    where: { id: orderId },
    data: { status: "IN_PROGRESS" },
  });

  return `${process.env.CLIENT_URL}/payment/success?orderId=${orderId}`;
};
// ─── FAIL ─────────────────────────────────────────────────────────────
const handleFail = async (orderId: string): Promise<string> => {
  await prisma.payment.update({
    where: { orderId },
    data: { status: "FAILED" },
  });

  await prisma.order.update({
    where: { id: orderId },
    data: { status: "CANCELLED" },
  });

  return `${process.env.CLIENT_URL}/payment/fail?orderId=${orderId}`;
};

// ─── CANCEL ───────────────────────────────────────────────────────────
const handleCancel = async (orderId: string): Promise<string> => {
  await prisma.payment.update({
    where: { orderId },
    data: { status: "FAILED" },
  });

  return `${process.env.CLIENT_URL}/payment/cancel?orderId=${orderId}`;
};

export const PaymentService = {
  initiatePayment,
  handleSuccess,
  handleFail,
  handleCancel,
};
