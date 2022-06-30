import { Request, Response } from "express";
import app from "./app";

app.get("/", (_: Request, res: Response) => {
  res.send("Hello world");
});

// if (process.env.NODE_ENV !== "test") app.listen(port);

export default app;
