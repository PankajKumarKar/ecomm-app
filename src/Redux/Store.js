import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductsSlice";
import cartReducer from "./Slices/CartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
