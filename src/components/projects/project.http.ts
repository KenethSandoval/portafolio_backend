import { Request, Response } from "express";
import { success, error } from "../../utils/response";

import { create, getAll, getById } from "./project.controller";

export const createProject: Handler = async (req, res) => {
  try {
    const data = await create(req.body)().then(res => {
      return res!.allData();
    });

    return success(res, data, 201);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};

export const getProjects: Handler = async (_, res) => {
  try {
    const data = await getAll()().then(res => {
      return res!.allData();
    });

    return success(res, data, 200);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};

export const getProjectById: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const data = (await getById(id)().then(res => {
      return res!.allData();
    })) as Object | string;
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
