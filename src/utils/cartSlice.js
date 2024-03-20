import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: {
    // Initial state of slice currently the slice is empty when we add items to it then it will be filled.
    // items: ["Pizza", "Burger", "Fries"],
    items: [],
  },
  // This is the reducer object which contains small reducer funcyion with which an action is also mapped
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // state.items.length = 0; // []  Here the state becomes empty again
      // RTK(Redux Took Kit)  ---> Either mutate the existing state or return a new state
      return { items: [] }; //this will also work bcoz here also the initialState get empty
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
// Just be careful while writing redux code for example here in our cartSlice we have reducers in our slice but the time when we export it we write reducer which is a single reducer not reducers.

// Actions are actually kind of API to communicate with Redux Store.
// Add Item , Remove Item , Clear Cart these are some actions that we can perform.

// In above { addItem, removeItem, clearCart } these are actually Reducer function taht are mapped with actions.So, these reducer function takes up 2 parameter (state,action) and will modify the state based on action.This reducer function actually has the access to the state (initialState).
