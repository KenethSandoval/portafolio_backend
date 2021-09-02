import { Request, Response } from "express";

export const getProjects = async (_: Request, res: Response) => {
  return res.status(404).json({ message: "Void" });
};

export const createProjects = async (req: Request, res: Response) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({ message: "Missing data" });
  }

  return res.status(201).json({ message: "Created" });
};
