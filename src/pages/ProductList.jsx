import React, { useContext } from "react";
import { ProductContext } from "../context/ProductStore";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductList() {
  const { product } = useContext(ProductContext);
  return (
    <div className="p-8 ">
        <Navbar />
      <div className="border-2 border-black p-4 mt-4">
        {product.length > 0 ? product.map((prod) => (
          <div key={prod.id} className="my-2">
            <Link
              className="font-bold text-blue-500 text-xl"
              to={`/list/${prod.id}`}
            >
              {prod.name}
            </Link>
          </div>
        )) : <h1>No Products Available</h1>}
      </div>
    </div>
  );
}
