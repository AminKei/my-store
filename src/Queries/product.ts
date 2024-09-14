import axios from "axios";
import { EndPoints } from "./config";
import { ProductModel } from "../models/product";

export const getProducts = async () => {
  const r = await axios.get<ProductModel>(
    process.env.REACT_APP_BASE_URL + EndPoints.Product_List
  );
  return r.data;
};

