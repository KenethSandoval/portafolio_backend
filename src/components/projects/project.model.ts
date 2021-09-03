import { model, Schema } from "mongoose";

const projectsSchema = new Schema<IProjectSchema>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  urlGithub: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  urlDemo: String,
  image: String,
});

export const Projects = model<IProjectSchema>("Projects", projectsSchema);
