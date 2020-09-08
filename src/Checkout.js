import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutItems from "./CheckoutItems";
import Subtotals from "./Subtotals";

function Checkout() {
  const [{ cart }] = useStateValue();
  console.log("cart", cart);
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img src="" alt="" className="checkout__ad" /> */}

        {cart?.length === 0 ? (
          <div className="checkout__empty">
            <h2>Your Cart is Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Cart Items</h2>
            <small className='checkout__pricetag'>price</small>
            {cart?.map((item) => (
              <CheckoutItems
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout__right">
          <Subtotals/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
