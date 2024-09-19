import axios from "axios";
import { UserBody, UserResponse } from "../models/user";
import { EndPoints } from "./config";

export const registerUser = async (body: UserBody) => {
  const r = await axios.post<UserResponse>(
    process.env.REACT_APP_BASE_URL + EndPoints.User_Register,
    body
  );
  return r.data;
};
