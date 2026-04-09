import { Router } from "express";
import { ChatController } from "./chat.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import { authorizeRoles } from "../../middlewares/role.middleware";

const router = Router();

router.post(
  "/get-or-create-conversation",
  authenticate,
  authorizeRoles("BUYER"),
  ChatController.getOrCreateConversation
);

router.post(
  "/send-message",
  authenticate,
  authorizeRoles("BUYER", "SELLER"),
  ChatController.sendMessage
);

router.get(
  "/conversations",
  authenticate,
  authorizeRoles("BUYER", "SELLER"),
  ChatController.getUserConversations
);

router.get(
  "/messages/:conversationId",
  authenticate,
  authorizeRoles("BUYER", "SELLER"),
  ChatController.getConversationMessages
);

export const ChatRoutes = router;
