import { useContext } from "react";
import { ShoppingCartContext } from "../../StateManagement/Context";
import Checkout from "../Checkout";

const CartList = () => {
  const { cartItems, handleRemoveProductFromCart, IncreaseProductQuantity, ReduceProductQuantity} = useContext(ShoppingCartContext);
  console.log(cartItems, ":cartItems");

  return (
    <div className="cart-list">
      {cartItems.map((item) => {
        return (
          <div
            className="cart-item"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "50px",
            }}
            key={item.id}
          >
            <img
              src={item.images[0]}
              alt={item.title}
              style={{ width: "100px", height: "100px", marginRight: "10px" }}
            />
            <div>
              <h1 style={{ fontSize: "1.2em", margin: "0" }}> {item.title}</h1>
              <p style={{ margin: "5px 0" }}>Price: ${item.price}</p>
              <p style={{ margin: "5px 0" }}>Quantity: {item.quantity}</p>
              <button disabled={item.stock === item.quantity}  onClick={()=>IncreaseProductQuantity(item)}>+</button>
              <button onClick={()=>ReduceProductQuantity(item)}>-</button>
            </div>
            <button onClick={()=>handleRemoveProductFromCart(item)}> remove</button>
          </div>
        );
      })}
      <Checkout/>
    </div>
  );
};

export default CartList;
