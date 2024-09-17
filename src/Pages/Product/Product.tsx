import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../Queries/product";
import { useProducts } from "../../Hooks/useProduct/useProduct";
import { ProductModel } from "../../models/product";
import { useMemo } from "react";

const Product = () => {
  return (
    <div>
      <h1>Product Page :</h1>
    </div>
  );
};

export default Product;
