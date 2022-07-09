import { v4 as uuidv4 } from "uuid";
import { uploadImage } from "../../utils/upload-images";
import { Projects } from "./project.model";

export function create(body: IProjectSchema): LazyList<IProjectSchema> {
  return async (): Promise<{ allData: Lazy<IProjectSchema> }> => {
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
  return async (): Promise<{ allData: Lazy<IProjectSchema[]> }> => {
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
  return async (): Promise<{ allData: Lazy<IProjectSchema | null> }> => {
    const project: IProjectSchema | null = await Projects.findById(id);
    if (!project) {
      throw { code: 404, message: "Project not found" };
    } else {
      return {
        allData: () => project,
      };
    }
  };
}

export function deleted(id: string): LazyList<IProjectSchema | null> {
  return async (): Promise<{ allData: Lazy<IProjectSchema | null> }> => {
    const project = await Projects.findById(id);
    if (!project) {
      throw { code: 404, message: "Project not found" };
    } else {
      const projectDelete = await Projects.findByIdAndDelete(id);
      return {
        allData: () => projectDelete,
      };
    }
  };
}

export function fileUpload(data: any, id: string): LazyList<string> {
  return () => {
    if (!data.files || Object.keys(data.files).length === 0) {
      throw { message: "Missing file", code: 400 };
    } else {
      const file = data.files.image;
      const cutName: Array<string> = file.name.split(".");
      const extensionFile = cutName[cutName.length - 1];

      const extensionsValid: Array<string> = ["png", "jpg", "jpeg", "gif"];

      if (!extensionsValid.includes(extensionFile)) {
        throw { message: `Extension .${extensionFile} not valid`, code: 400 };
      }

      const nameFile = `${uuidv4()}.${extensionFile}`;

      const path: string = `src/uploads/${nameFile}`;

      file.mv(path, async (err: Error) => {
        if (err) {
          console.log(err.message);
          throw { message: "Failed upload", code: 500 };
        }
        await uploadImage(Projects, id, path)();
      });

      return {
        allData: () => nameFile,
      };
    }
  };
}

export function returnImage(id: string): LazyList<string> {
  return async () => {
    const project = await Projects.findById(id);

    if (project) {
      const image: string = project!.image || "no-imag";
      return {
        allData: () => image,
      };
    } else {
      return {
        allData: () => "no-image",
      };
    }
  };
}
