import React from "react";
import "../Styles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getBasketTotal } from "../Redux/Duck/basket";
function Subtotal() {
  let basket = useSelector((state) => state.basket.basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__list">
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"  ₹  "}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
