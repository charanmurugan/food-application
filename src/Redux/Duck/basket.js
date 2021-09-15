import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + parseInt(item.price), 0);

export const notifyAdded = () => toast.success("Item Added to Cart !!");
export const notifyRemove = () => toast.error("Item Removed from Cart !!!");

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove (id:${action.id}) as its not inbasket!!`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
