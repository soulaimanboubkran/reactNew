import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./add";
import userReducer from "./tp";

const store = configureStore({
  reducer :{
    cart: cartReducer,
  user: userReducer
  }
  
});


export default store;
