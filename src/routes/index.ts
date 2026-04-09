import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { PaymentRoutes } from "../modules/payment/payment.route";
import { BuyerProfileRoutes } from "../modules/buyerProfile/buyerProfile.route";
import { SellerProfileRoutes } from "../modules/sellerProfile/sellerProfile.route";
import { ServiceRoutes } from "../modules/service/service.route";
import { OrderRoutes } from "../modules/order/order.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { UploadRoutes } from "../modules/upload/upload.route";
import { ChatRoutes } from "../modules/chat/chat.route";
import { MetaRoutes } from "../modules/meta/meta.route";
import { AIRoutes } from "../modules/ai/ai.route";

const routes = [
  { path: "/auth", handler: AuthRoutes },
  { path: "/users", handler: UserRoutes },
  { path: "/buyer-profiles", handler: BuyerProfileRoutes },
  { path: "/seller-profiles", handler: SellerProfileRoutes },
  { path: "/categories", handler: CategoryRoutes },
  { path: "/services", handler: ServiceRoutes },
  { path: "/orders", handler: OrderRoutes },
  { path: "/reviews", handler: ReviewRoutes },
  { path: "/payment", handler: PaymentRoutes },
  { path: "/admin", handler: AdminRoutes },
  { path: "/upload", handler: UploadRoutes },
  { path: "/chat", handler: ChatRoutes },
  { path: "/meta", handler: MetaRoutes },
  { path: "/ai", handler: AIRoutes },
];

const router = Router();

routes.forEach((route) => {
  router.use(route.path, route.handler);
});

export const applicationRoutes = router;
