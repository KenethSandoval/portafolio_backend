import { Projects } from "./project.model";

export function getAll(): LazyList<IProjectSchema[]> {
  return async (): Promise<any> => {
    const project: IProjectSchema[] = await Projects.find({});
    if (project.length === 0) {
      throw { code: 404, message: "Void" };
    } else {
      return {
        allData: () => project,
      };
    }
  };
}
