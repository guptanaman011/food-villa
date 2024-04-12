import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const item = action.payload;
      // find the index in the array
      let index;
      state.items.forEach((data, i) => {
        if (data.brand_id === item.brand_id) {
          index = i;
        }
      });
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
