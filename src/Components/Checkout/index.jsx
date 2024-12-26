import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../StateManagement/Context";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { findTotalCost,totalCost } = useContext(ShoppingCartContext);
  const navigate= useNavigate();

  useEffect(() => {
    console.log(findTotalCost(), "checkout");
    findTotalCost();
  }, []);

  return (
    <Fragment>
      <div className="checkout">
        <h1>Order summary</h1>
        <p>{`totalCost: ${totalCost}`}</p>
      </div>
      <div>
        <button >Pay</button>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        </div>
    </Fragment>
  );
};

export default Checkout;
