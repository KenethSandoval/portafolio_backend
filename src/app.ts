import express, { Application } from "express";
import cors from "cors";
import { connect } from "mongoose";
import { router as routerAuth } from "./components/auth/auth.route";
import { router as routerProject } from "./components/projects/project.route";

const app: Application = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/auth", routerAuth);
app.use("/project", routerProject);

connect("mongodb://localhost:27017/portafolio", () => {
  console.log(">>DB online");
});

if (process.env.NODE_ENV !== "test")
	app.listen(process.env.PORT, () => {
  	console.log(`Server on listen http://localhost:${process.env.PORT}`);
	});

export default app;
