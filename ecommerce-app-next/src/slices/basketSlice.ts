import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketItem, BasketState } from "@/typings";

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: { basket: BasketState }) => state.basket.items;

export default basketSlice.reducer;
