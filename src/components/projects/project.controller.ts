//import { Projects } from "./project.model";

export function getAll(): LazyList<IProjectFake> {
  return () => {
    const projectFake = [
      {
        _id: "1",
        title: "Angular ADMIN PRO",
        description: "Panel de administrador de un sistema de hospital",
        urlGithub: "https://github.com/KenethSandoval/Angualar-AdminPro",
        tags: ["Angular", "Node js"],
        urlDemo: "https://adminpro.com",
        image: "imagen.png",
      },
      {
        _id: "2",
        title: "Angular ADMIN PRO",
        description: "Panel de administrador de un sistema de hospital",
        urlGithub: "https://github.com/KenethSandoval/Angualar-AdminPro",
        tags: ["Angular", "Node js"],
        urlDemo: "https://adminpro.com",
        image: "imagen.png",
      },
    ];
    if (projectFake.length === 0) {
      throw { code: 404, message: "Void" };
    } else {
      return {
        head: () => projectFake,
      };
    }
  };
}
