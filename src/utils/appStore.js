import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// import cartReducer1 from "./cartSlice";
// this cartReducer is actually the cartSlice.reducer that we have exported from cartSlice.
// & here we can give any name in place of cartReducer
const appStore = configureStore({
  // Here , this reducer is the main reducer of our whole App and inside this it can have reducers of diffrent slices and we can see that below.
  reducer: {
    cart: cartReducer,
    // cart: cartReducer1,
  },
});
export default appStore;
