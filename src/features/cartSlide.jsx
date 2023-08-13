import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

const initialState = {
  cartItems: [],
  quentity: 0,
  total: 0,
};

const COOKIESNAME = "cartItems";
const dataFromCookies = Cookies.get(COOKIESNAME);

if (dataFromCookies) {
  initialState.cartItems = JSON.parse(dataFromCookies).cartItems;
  initialState.quentity = 1;
  initialState.total = initialState.cartItems.reduce(
    (pv, cv) => pv + cv.price * cv.quentity,
    0
  );
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quentity: 1 }];
        state.total += payload.price;
        Cookies.set(COOKIESNAME, JSON.stringify(state));
      }
    },

    removeCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.total = state.cartItems.reduce(
        (pv, cv) => pv + cv.price * cv.quentity,
        0
      );
      Cookies.set(COOKIESNAME, JSON.stringify(state));
    },
    increase: (state, { payload }) => {
      state.cartItems.map((item) => {
        if (item.id === payload.id) {
          item.quentity++;
          state.total += item.price;
          Cookies.set(COOKIESNAME, JSON.stringify(state));
        }
      });
    },
    decrease: (state, { payload }) => {
      state.cartItems.map((item) => {
        if (item.id === payload.id && item.quentity > 1) {
          item.quentity--;
          state.total -= item.price;
          Cookies.set(COOKIESNAME, JSON.stringify(state));
        }
      });
    },
  },
});

export const { addToCart, removeCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
