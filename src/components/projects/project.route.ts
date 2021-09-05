import { Router } from "express";
import { getProjects, createProject, getProjectById } from "./project.http";

export const router = Router();

router.route("/").get(getProjects).post(createProject);

router.route("/:id").get(getProjectById);
