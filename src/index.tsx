import React from "react";  
import ReactDOM from "react-dom/client";  
import "./index.css";  
import App from "./App";  
import reportWebVitals from "./reportWebVitals";  
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";  
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";  
import Login from "./Pages/Login/Login";  
import Cart from "./Pages/Cart/Cart";  
import Product from "./Pages/Product/Product";  
import Appbar from "./Components/Appbar/Appbar";  
import Regester from "./Pages/Regester/Regester";

const root = ReactDOM.createRoot(  
  document.getElementById("root") as HTMLElement  
);  

const queryClient = new QueryClient();  

const AppWrapper = () => {  
  const location = useLocation();  
  const WithoutAppbar = ["/login", "/register"];  

  return (  
    <>  
      {!WithoutAppbar.includes(location.pathname) && <Appbar />} {/* Only show Appbar if not on login page */}  
      <Routes>  
        <Route path="/" element={<App />} />  
        <Route path="/Product" element={<Product />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/register" element={<Regester />} /> {/* Fixed typo in the usage */}  
        <Route path="/cart" element={<Cart />} />  
        <Route path="*" element={<h1>Page Not Found</h1>} />  
      </Routes>  
    </>  
  );  
};  

root.render(  
  <QueryClientProvider client={queryClient}>  
    <Router>  
      <AppWrapper /> {/* Use the AppWrapper to manage Appbar and Routes */}  
    </Router>  
  </QueryClientProvider>  
);  
reportWebVitals();