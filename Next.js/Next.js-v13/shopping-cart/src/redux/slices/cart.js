import { createSlice } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

const initialState = Cookies.get("cart")
  ? JSON.parse(Cookies.get("cart"))
  : {
      cartItems: [],
    };

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    ADD_Item: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state.cartItems.map((item) =>
            existingItem.title === item.title ? newItem : item
          )
        : [...state.cartItems, newItem];

      Cookies.set("cart", JSON.stringify({ ...state, cartItems }));

      state.cartItems = cartItems;
    },
    REMOVE_ITEM: (state, action) => {
      const cartItems = state.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );

      Cookies.set("cart", JSON.stringify({ ...state, cartItems }));

      state.cartItems = cartItems;
    },
  },
});

export const { ADD_Item, REMOVE_ITEM } = cartSlice.actions;

export default cartSlice.reducer;
