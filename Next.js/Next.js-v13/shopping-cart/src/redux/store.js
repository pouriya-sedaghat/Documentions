import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "@/redux/slices/cart";

export const store = configureStore({
  reducer: { cart: cartReducer },
});
