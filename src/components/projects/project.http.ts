import { success, error } from "../../utils/response";

import { create, getAll, getById, deleted } from "./project.controller";

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

export const deleteProject: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleted(id)().then();
    return success(res, "Deleted", 200);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};
