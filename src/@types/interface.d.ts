// Interface User
interface IUserSchema extends TMongoDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
  image?: string;
}

// Interface Project
interface IProjectSchema extends TMongoDocument {
  _id: string;
  title: string;
  description: string;
  urlGithub: string;
  tags: Array<string>;
  urlDemo?: string;
  image?: string;
}

interface IProjectFake {
  _id: string;
  title: string;
  description: string;
  urlGithub: string;
  tags: Array<string>;
  urlDemo: string;
  image: string;
}
