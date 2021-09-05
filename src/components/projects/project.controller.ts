import { Projects } from "./project.model";

export function create(body: IProjectSchema): Lazy<IProjectSchema> {
  return async (): Promise<IProjectSchema> => {
    if (!body.title || !body.description) {
      throw { code: 400, message: "Missing data" };
    }
    return body;
  };
}

export function getAll(): LazyList<IProjectSchema[]> {
  return async (): Promise<any> => {
    const projects: IProjectSchema[] = await Projects.find({});
    if (projects.length === 0) {
      throw { code: 404, message: "Void" };
    } else {
      return {
        allData: () => projects,
      };
    }
  };
}

export function getById(id: string): LazyList<IProjectSchema | null> {
  return async (): Promise<any> => {
    const project: IProjectSchema | null = await Projects.findById(id);
    if (!project) {
      throw { code: 404, message: "User not found" };
    } else {
      return {
        allData: () => project,
      };
    }
  };
}
