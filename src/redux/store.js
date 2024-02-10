import { createStore, combineReducers } from "redux";
import cartReducer from "./add";
import userReducer from "./tp";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;
