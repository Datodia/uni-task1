import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import Slug from "./pages/Slug";
import ProductStore from "./context/ProductStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/list/:id" element={<Slug />} />
        </Routes>
      </BrowserRouter>
    </ProductStore>
  </React.StrictMode>
);
