import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = (price, quantity) => price * quantity;

  return (
    <div>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <img
                  src={item.image || "https://via.placeholder.com/50"}
                  alt={item.name}
                  style={{ width: "100px", height: "100px", marginRight: "10px" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
              <div>
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    style={{ marginLeft: "5px", width: "50px" }}
                  />
                </label>
              </div>
              <div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
              <div>
                <p>Total: ₹{calculateTotal(item.price, item.quantity)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
