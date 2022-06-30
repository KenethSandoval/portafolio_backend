import { existsSync, unlinkSync } from "fs";
import { Projects } from "../components/projects/project.model";
// import { Users } from "../components/auth/auth.model";

// type modelsValid = typeof Projects | typeof Users;

export function uploadImage(
  models: typeof Projects,
  id: string,
  nameFile: string
): LazyList<boolean> {
  return async (): Promise<{ allData: Lazy<boolean> }> => {
    const model = await models.findById(id);

    if (!model) {
      return {
        allData: () => false,
      };
    }

    const oldPath: string = `src/uploads/${model.image}`;

    if (existsSync(oldPath)) {
      unlinkSync(oldPath);
    }
    model.image = nameFile;
    await model.save();
    return {
      allData: () => true,
    };
  };
}
