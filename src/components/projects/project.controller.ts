import { Projects } from "./project.model";

export function create(body: IProjectSchema): LazyList<IProjectSchema> {
  return async (): Promise<any> => {
    if (!body.title || !body.description || !body.urlGithub || !body.tags) {
      throw { code: 400, message: "Missing data" };
    } else {
      const newProject = new Projects({
        ...body,
      });
      await newProject.save();
      return {
        allData: () => newProject,
      };
    }
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
