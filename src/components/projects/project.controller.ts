import { Projects } from "./project.model";

type Lazy<T> = () => Promise<T>;

type LazyList<T> = Lazy<{
  allData: Lazy<T>;
}>;

export async function getAll(): Promise<LazyList<IProjectSchema[]>> {
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
