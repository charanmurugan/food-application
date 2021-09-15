import { combineReducers, createStore } from "redux";
import BasketReducer from "./Duck/basket";

const reducer = combineReducers({
  basket: BasketReducer,
});

const store = createStore(reducer);

export default store;
