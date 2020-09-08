import React from "react";
import './CheckoutItems.css';
import { useStateValue } from "./StateProvider";

function CheckoutItems(props) {
  console.log("props", props);
  const [{cart}, dispatch] = useStateValue();
  const RemoveFromCart = () => {
      dispatch({
          type:"REMOVE_FROM_CART",
          id: props.id,
      });

  }
  return (
    <div className="checkoutitem">
      <img src={props.image} alt="image" className="checkoutitem__image" />
      <div className="checkoutitem__info">
        <p className="checkoutitem__title">{props.title}</p>
        <p className="checkoutitem__price">
          <small>Ksh.</small>
          <strong> {props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p className="product__star">*</p>
            ))}
        </div>
        <button className = "checkoutitem__remove" onClick = {RemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutItems;
