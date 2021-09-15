import React from "react";
import "../Styles/cartproduct.css";
import { notifyRemove } from "../Redux/Duck/basket";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
function Cartproduct({ id, title, image, price, rating, hideButton }) {
  const dispatch = useDispatch();
  const updateCart = () => {
    removeFromBasket();
    notifyRemoved();
  };
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const notifyRemoved = () => {
    notifyRemove();
  };
  function numberFormat(num) {
    return num.toLocaleString("en", { useGrouping: true });
  }

  const amount = numberFormat(parseInt(price));
  return (
    <div className="checkoutProduct">
      <ToastContainer className="toastStyle checkout-toaststyle" />
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>&#8377; </small>
          <strong>{amount}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={updateCart}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default Cartproduct;
