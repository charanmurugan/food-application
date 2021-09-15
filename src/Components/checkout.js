import React from "react";
import "../Styles/checkout.css";
import Subtotal from "./subtotal";
import Cartproduct from "./cartproduct";
import { useSelector } from "react-redux";
function Checkout() {
  let basket = useSelector((state) => state.basket.basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHBMu9JToAgJRgpt8xPlbz_lOVAR9arOv5g&usqp=CAU"
          alt="ad image"
        />
        <div>
          <h3>Hello , Guest</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((ele) => {
          return (
            <Cartproduct
              id={ele.id}
              title={ele.title}
              price={ele.price}
              image={ele.image}
              rating={ele.rating}
            />
          );
        })}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
