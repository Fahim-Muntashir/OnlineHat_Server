// src/modules/user/user.service.ts
import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
  role: "BUYER" | "SELLER";
};

// ─── Create User ──────────────────────────────────────────
const createUser = async (payload: CreateUserPayload) => {
  const { name, email, password, role } = payload;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      buyerProfile: role === "BUYER" ? { create: {} } : undefined,
      sellerProfile: role === "SELLER" ? { create: {} } : undefined,
    },
    include: {
      buyerProfile: true,
      sellerProfile: true,
    },
  });

  const { password: _, ...safeUser } = user;
  return safeUser;
};

// ─── Get All Users ────────────────────────────────────────
const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      profileImage: true,
      createdAt: true,
      buyerProfile: {
        select: {
          id: true,
          bio: true,
          phone: true,
        },
      },
      sellerProfile: {
        select: {
          id: true,
          bio: true,
          skills: true,
          earnings: true,
        },
      },
    },
  });

  return users;
};

// ─── Get User By ID ───────────────────────────────────────
const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      profileImage: true,
      createdAt: true,
      buyerProfile: true,
      sellerProfile: true,
    },
  });

  if (!user) throw new Error("User not found");
  return user;
};

// ─── Delete Single User ───────────────────────────────────
const deleteUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("User not found");

  if (user.role === "BUYER") {
    const buyerProfile = await prisma.buyerProfile.findUnique({
      where: { userId: id },
    });

    if (buyerProfile) {
      await prisma.message.deleteMany({
        where: { senderBuyerId: buyerProfile.id },
      });
      await prisma.review.deleteMany({
        where: { buyerId: buyerProfile.id },
      });
      await prisma.payment.deleteMany({
        where: { order: { buyerId: buyerProfile.id } },
      });
      await prisma.order.deleteMany({
        where: { buyerId: buyerProfile.id },
      });
      await prisma.conversation.deleteMany({
        where: { buyerId: buyerProfile.id },
      });
      await prisma.buyerProfile.delete({
        where: { userId: id },
      });
    }
  }

  if (user.role === "SELLER") {
    const sellerProfile = await prisma.sellerProfile.findUnique({
      where: { userId: id },
    });

    if (sellerProfile) {
      await prisma.message.deleteMany({
        where: { senderSellerId: sellerProfile.id },
      });

      const services = await prisma.service.findMany({
        where: { sellerId: sellerProfile.id },
      });

      for (const service of services) {
        await prisma.review.deleteMany({ where: { serviceId: service.id } });
        await prisma.payment.deleteMany({
          where: { order: { serviceId: service.id } },
        });
        await prisma.order.deleteMany({ where: { serviceId: service.id } });
        await prisma.servicePackage.deleteMany({
          where: { serviceId: service.id },
        });
      }

      await prisma.service.deleteMany({
        where: { sellerId: sellerProfile.id },
      });
      await prisma.order.deleteMany({ where: { sellerId: sellerProfile.id } });
      await prisma.conversation.deleteMany({
        where: { sellerId: sellerProfile.id },
      });
      await prisma.sellerProfile.delete({ where: { userId: id } });
    }
  }

  await prisma.user.delete({ where: { id } });
  return { message: "User deleted successfully" };
};

// ─── Delete All Users ─────────────────────────────────────
const deleteAllUsers = async () => {
  // delete in dependency order to avoid FK errors
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.review.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.order.deleteMany();
  await prisma.servicePackage.deleteMany();
  await prisma.service.deleteMany();
  await prisma.buyerProfile.deleteMany();
  await prisma.sellerProfile.deleteMany();
  await prisma.user.deleteMany();

  return { message: "All users deleted successfully" };
};

export const UserService = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  deleteAllUsers,
};
