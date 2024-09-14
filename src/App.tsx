import "./App.css";
import { useProducts } from "./Hooks/useProduct/useProduct";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./Components/Appbar/Appbar";
import Loader from "./BaseComponents/Loader/Loader";
import FilterConteiner from "./Components/FilterConteiner/FilterConteiner";

function App() {
  const { data, error, isLoading } = useProducts();

  // const {data, error, isLoading} = useGet()

  return (
    <div style={{ margin: "1vh" }}>
      <Appbar />
      <h3 style={{ margin: "1vh" }}>Products List</h3>

      <div className="root-divs">
        <FilterConteiner />
        <div className="root-conteiner">
          {isLoading && <Loader />}
          {error && <h1>network has error ... please try later ...</h1>}
          {data?.map((item, key) => {
            return (
              <div key={key} className="Child-root">
                <img
                  src={item.images[0]}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
                  }}
                  className="image-products"
                />
                <p>{item.title}</p>
                <h2>${item.price}</h2>
                <Button> Add To Cart</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
