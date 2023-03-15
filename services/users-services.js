import { userSchema } from "../models/userModel.js";
import mongoose from "mongoose";

const userModel = mongoose.model("User", userSchema);

export const getUsers = async () => {
  return await userModel.find({});
};

export const getUserById = async (id) => {
  return await userModel.findById(id);
};

export const createUser = async (user) => {
  return await userModel.create(user);
};

export const updateUser = async (id, user) => {
  return await userModel.findByIdAndUpdate(id, user, { new: true });
};

export const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};
