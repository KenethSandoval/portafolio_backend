import { Router } from "express";
import expressFileUpload from "express-fileupload";

import {
  getProjects,
  createProject,
  getProjectById,
  deleteProject,
  uploads,
  viewImage,
} from "./project.http";

export const router = Router();
router.use(expressFileUpload());

router.route("/").get(getProjects).post(createProject);

router.route("/:id").get(getProjectById).delete(deleteProject);

router.route("/image/:id").post(uploads);
router.route("/return/:image").get(viewImage);
