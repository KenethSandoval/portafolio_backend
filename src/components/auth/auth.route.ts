import { Router } from "express";
import { loginUser } from "./auth.http";

export const router = Router();

router.route("/login").post(loginUser);
