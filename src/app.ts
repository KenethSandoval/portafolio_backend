import express, { Application } from "express";
import { router as routerAuth } from "./components/auth/auth.route";
import { router as routerProject } from "./components/projects/project.route";

const app: Application = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/auth", routerAuth);
app.use("/project", routerProject);

app.listen(process.env.PORT, () => {
  console.log(`Server on liste http://localhost:${process.env.PORT}`);
});

export default app;
