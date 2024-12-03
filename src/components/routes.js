// App.js
import React from "react";
import ProductList from "./ProductList";
import CartPage from "./CartPage";

const Route = () => {
  return (
    <div>
      <h1>Cart Task</h1>
      <ProductList />
      <CartPage />
    </div>
  );
};

export default Route;
