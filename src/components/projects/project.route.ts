import { Router } from "express";
import { getProjects, createProjects } from "./project.http";

export const router = Router();

router.route("/").get(getProjects).post(createProjects);
