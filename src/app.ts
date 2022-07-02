import cors from "cors";
import { config } from "dotenv";
import express, { Application } from "express";
import { connect } from "mongoose";
import path from "path";
import { router as routerAuth } from "./components/auth/auth.route";
import { router as routerProject } from "./components/projects/project.route";

config();

const app: Application = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/auth", routerAuth);
app.use("/project", routerProject);

const dbConnection = async () => {
  try {
    await connect(process.env.MONGO_URL || "mongodb://localhost:27017/portfolio");
    console.log(">>DB online");
  } catch (e) {
    console.error(e);
    throw new Error("Error al iniciar la base de datos");
  }
};

dbConnection();

if (process.env.NODE_ENV !== "test")
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server on listen http://localhost:${process.env.PORT || 3000}`);
  });

export default app;
