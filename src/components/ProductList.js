// ProductList.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "4 in 1 Multicolor Pen", price: 25, image: 'https://m.media-amazon.com/images/I/51jZP2zGfKL._AC_UF1000,1000_QL80_.jpg'},
    { id: 2, name: "Cubelelo Drift 3x3 Black Speedcube", price: 220, image: 'https://m.media-amazon.com/images/I/41DcQGNCPcL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 3, name: "COI Personal to Do List Notepad", price: 152, image: 'https://m.media-amazon.com/images/I/41L0fOU1rcL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 4, name: "OLEVS Skeleton Analog Quartz ", price: 3200, image: 'https://m.media-amazon.com/images/I/71D7rWpIv9L._AC_UL320_.jpg' },
  ];

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <div>
                <img
                  src={product.image || "https://via.placeholder.com/50"}
                  alt={product.name}
                  style={{ width: "100px", height: "100px", marginRight: "10px" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3>{product.name}</h3>
                <p>Price: ₹{product.price}</p>
              </div>
           
            <button onClick={() => addToCart(product)} style={{
                    backgroundColor: "#00F736",
                    color: "black",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
