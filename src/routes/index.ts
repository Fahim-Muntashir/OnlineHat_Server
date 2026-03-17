import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { CategoryRoutes } from "../modules/category/category.route";

// Define all routes in one config array for clarity and easy updates
const routes = [
  { path: "/user", handler: UserRoutes },
  { path: "/auth", handler: AuthRoutes },
  { path: "/categories", handler: CategoryRoutes },
];

const router = Router();

// Loop through all routes and register them
routes.forEach((route) => {
  router.use(route.path, route.handler);
});

export const applicationRoutes = router;
