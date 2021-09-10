import { existsSync, unlinkSync } from "fs";

let oldPath: string;
//FIXME: arreglar el tipo any de model, y quitar la variable oldPath;
export function uploadImage<T>(models: any, id: T, nameFile: T): LazyList<boolean> {
  return async (): Promise<{ allData: Lazy<boolean> }> => {
    const model = models.findById(id);
    if (!model) {
      return {
        allData: () => {
          new Promise((_, reject) => {
            reject(false);
          });
        },
      };
    }

    oldPath = `src/uploads/${model.image}`;

    if (existsSync(oldPath)) {
      unlinkSync(oldPath);
    }
    model.image = nameFile;
    await model.save();
    return {
      allData: () => {
        new Promise((resolve, _) => {
          resolve(true);
        });
      },
    };
  };
}
