import { success, error } from "../../utils/response";

import { create, getAll, getById, deleted } from "./project.controller";

//FIXME: no retorna la data
export const createProject: Handler = async (req, res) => {
  try {
    const result = await create(req.body)();
    const data = result!.allData() as string | Object;

    return success(res, data, 201);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};

export const getProjects: Handler = async (_, res) => {
  try {
    const result = await getAll()();
    const data = result!.allData() as string | Object;

    return success(res, data, 200);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};

export const getProjectById: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getById(id)();
    const data = result!.allData() as Object | string;
    return success(res, data, 200);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};

export const deleteProject: Handler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleted(id)()!.then();
    return success(res, "Deleted", 200);
  } catch (e) {
    return error(res, e.message, e.code);
  }
};
