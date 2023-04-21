import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./components/Cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

export default store