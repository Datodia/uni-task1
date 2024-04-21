import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductStore";
import Navbar from "../components/Navbar";

export default function Slug() {
  const param = useParams();
  const { product } = useContext(ProductContext);
  const showProduct = product.find((el) => el.id === Number(param.id));

  return (
    <div className="p-8">
    <Navbar />
      {showProduct ? (
        <div>   
          <h1>
            <strong>Product Name:</strong> {showProduct?.name}
          </h1>
          <p>
            <strong>Product Description:</strong> {showProduct?.description}
          </p>
        </div>
      ) : (
        <h1>No product available</h1>
      )}
    </div>
  );
}
