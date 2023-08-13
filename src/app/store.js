import { configureStore } from "@reduxjs/toolkit";
import cartSlide from "../features/cartSlide";

export const store = configureStore({
  reducer: {
    cart: cartSlide,
  },
});
