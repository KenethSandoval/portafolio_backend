import { Router } from "express";
import {
  getProjects,
  createProject,
  getProjectById,
  deleteProject,
} from "./project.http";

export const router = Router();

router.route("/").get(getProjects).post(createProject);

router.route("/:id").get(getProjectById).delete(deleteProject);
