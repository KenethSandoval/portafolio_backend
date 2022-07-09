import { Projects } from "../components/projects/project.model";
import { storageCloudImage } from "./storage-cloud";

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

    const result = await storageCloudImage(nameFile);

    model.image = result?.url;
    await model.save();
    return {
      allData: () => true,
    };
  };
}
