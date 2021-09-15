import React from "react";
import "../Styles/product.css";
import { useDispatch } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import { notifyAdded } from "../Redux/Duck/basket";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const updateCart = () => {
    addToBasket();
    notifyadd();
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price.replace(",", ""),
        rating: rating,
      },
    });
  };
  const notifyadd = () => {
    notifyAdded();
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#8377;</small>
          <small>{price}</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={updateCart}>Add to Basket</button>
    </div>
  );
}

export default Product;
