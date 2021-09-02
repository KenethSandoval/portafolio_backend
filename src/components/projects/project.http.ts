import { Request, Response } from "express";
import { getAll } from "./project.controller";

export const getProjects = async (_: Request, res: Response) => {
  try {
    const data = getAll([]);
    console.log(data);
    return res.status(200).json({ message: "OK" });
  } catch (e) {
    return res.status(e.code).json(e.message);
  }
};

export const createProjects = async (req: Request, res: Response) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({ message: "Missing data" });
  }

  return res.status(201).json({ message: "Created" });
};
