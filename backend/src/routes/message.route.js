import express from "express"
import { protectRoute } from "../middelware/auth.middelware.js";
import { getUserForSidebar,getMessage,sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRoute, getUserForSidebar);

router.get("/:id",protectRoute,getMessage);

router.post("/send/:id",protectRoute, sendMessage);

export default router;