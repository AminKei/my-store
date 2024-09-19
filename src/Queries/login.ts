import axios from "axios";
import { LoginUser, UserLoginResponse } from "../models/user";
import { EndPoints } from "./config";

export const loginUser = async (body: LoginUser) => {
  const r = await axios.post<UserLoginResponse>(
    process.env.REACT_APP_BASE_URL + EndPoints.User_Login,
    body
  );
  return r.data;
};






