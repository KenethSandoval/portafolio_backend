import { Request, Response } from "express";
import { success, error } from "../../utils/response";

import { getAll } from "./project.controller";

export const getProjects = async (_: Request, res: Response) => {
  try {
    const data = await getAll().then((res: any) => {
      return res().then((res2: any) => {
        return res2.allData();
      });
    });

    return success(res, data, 200);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};

export const createProjects = async (req: Request, res: Response) => {
  if (!req.body.title || !req.body.description) {
    return error(res, "Missing data", 400);
  }

  return success(res, {}, 201);
};
