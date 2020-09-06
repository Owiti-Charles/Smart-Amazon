import React from "react";
import "./Product.css";
import { Button } from "@material-ui/core";

function Product(props) {
  return (
    <div className="products">
      <div className="product__info">
        <h2 className="product__title">{props.title}</h2>
        <p className="product__price">
          <small>Ksh. </small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p className = "product__star">*</p>
            ))}
        </div>
      </div>
      <img className="product_image" src={props.image} alt="prod image" />
      <button className = "product__checkout">Add to cart</button>
    </div>
  );
}

export default Product;
