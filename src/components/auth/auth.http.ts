import { Request, Response } from 'express';

interface User {
  email: string;
  password: string;
}

const userFake: Readonly<User> = {
  email: 'admin@gmail.com',
  password: 'eq221wqwuq2uUu',
};

export const loginUser = async (req: Request, res: Response) => {
  if (!req.body.email && !req.body.password) {
    return res.status(400).json({ message: 'Missing data' });
  } else if (
    userFake.email !== req.body.email ||
    userFake.password !== req.body.password
  ) {
    return res.status(401).json({ message: 'Invalid Credentials' });
  }
  return res.status(200).json({ message: 'Ok' });
};
