import React from "react";
import { ToastContainer } from "react-toastify";
import "../Styles/home.css";
import Product from "./product";
import Header from "./header";
function Home() {
  function numberFormat(num) {
    return num.toLocaleString("en", { useGrouping: true });
  }
  let uniqid = require("uniqid");

  return (
    <div className="header-container">
      <Header />
      <div className="home">
        <ToastContainer className="toastStyle" />
        <div className="home__container">
          <div className="home__row">
            <Product
              key={uniqid()}
              id="12321341"
              rating={4}
              title="Chicken Briyani + Tandoori Quater"
              price={numberFormat(300)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fy34lraiudhs64vykqk5"
            />
            <Product
              key={uniqid()}
              id="49538094"
              title="Bucket Chicken Briyani"
              price={numberFormat(950)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mmbepfsojgcdslaibtrr"
              rating={3}
            />
            <Product
              key={uniqid()}
              id="4953809445"
              title="Gobi Manchurian"
              price={numberFormat(110)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbvysepavmz5mocvce2o"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              key={uniqid()}
              id="4903850"
              title="Mushroom Chilli"
              price={numberFormat(135)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mpclgvpimlkoz21bnmn6"
              rating={2}
            />
            <Product
              key={uniqid()}
              id="23445930"
              title="Chicken 555"
              price={numberFormat(165)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ib1yjquzo4l5jb4rfrcb"
              rating={4}
            />
            <Product
              key={uniqid()}
              id="3254354345"
              title="Chicken Lollypop"
              price={numberFormat(155)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jbapwezta9nfkvlwfizp"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              key={uniqid()}
              id="4903850"
              title="Chicken Kabab Bone"
              price={numberFormat(130)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/hdyulyvvlqutrldzwlwo"
              rating={4}
            />
            <Product
              key={uniqid()}
              id="4903850459"
              title="Boneless Chicken Kabab"
              price={numberFormat(135)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/de2npky3lnzhwu3o21yu"
              rating={4}
            />
            <Product
              key={uniqid()}
              id="4903850098"
              title="Mutton Sukka"
              price={numberFormat(175)}
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/kn6q8bg6bzygegnx2u5e"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
