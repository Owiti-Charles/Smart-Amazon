import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";

function Subtotals() {
  const [{ cart }] = useStateValue();
  console.log("subtotal", cart);
  return (
    <div className="subtotals">
      <CurrencyFormat
      renderText= {(value)=>(
          <>
          <p>
      Subtotal ({cart.length}): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
              <input type="checkbox"/>This order contains a gift
          </small>
          </>
      )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Ksh "}
      />
      <button className="subtotals__button">Proceed to checkout</button>
    </div>
  );
}

export default Subtotals;
