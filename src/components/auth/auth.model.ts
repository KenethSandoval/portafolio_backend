import { model, Schema } from "mongoose";

const usersSchema = new Schema<IUserSchema>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: String,
});

export const Users = model<IUserSchema>("Users", usersSchema);
