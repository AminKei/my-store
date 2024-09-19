import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../Queries/product";
import { useProducts } from "../../Hooks/useProduct/useProduct";
import { ProductModel } from "../../models/product";
import { useMemo } from "react";
import { Button } from "react-bootstrap";

const Product = () => {
  return (
    <div>
      <h1>Product Page :</h1>
      <div className="container">
        <img src="" alt="" />
        <div className="datalist">
          <h4>Title</h4>
          <p>Discription</p>
          <h3>$Price</h3>
          <Button>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
