import { Request, Response } from "express";
import path from "path";
import app from "./app";

app.get("*", (_: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

export default app;
