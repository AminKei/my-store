import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useProducts } from "./Hooks/useProduct/useProduct";
import { Button, Card, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./Components/Appbar/Appbar";
import Loader from "./BaseComponents/Loader/Loader";

function App() {
  const { data, error, isLoading } = useProducts();

  // const {data, error, isLoading} = useGet()


  return (
    <div style={{ margin: "1vh" }}>
      <Appbar />
      <h1>Filter and Sort:</h1>

      <div className="root-conteiner">
        {isLoading && <Loader />}
        {error && <h1>network has error ... please try later ...</h1>}
        {data?.map((item, key) => {
          return (
            <div key={key} className="Child-root">
              <p>{item.title}</p>
              <img src={item.images[0]} alt="" />
              <h2>${item.price}</h2>
              <Button> Add To Cart</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
