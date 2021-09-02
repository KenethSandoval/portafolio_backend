import app from "./app";
import { config } from "dotenv";
config();
const port = 3000;

import { Request, Response } from "express";

app.get("/", (_: Request, res: Response) => {
  res.send("Hello world");
});

if (process.env.NODE_ENV !== "test") app.listen(port);

export default app;
