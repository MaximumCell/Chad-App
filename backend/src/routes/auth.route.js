import express from "express";
import { login, logout, signup, updateProfile,checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middelware/auth.middelware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

//update

router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);


export default router;
