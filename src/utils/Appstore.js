import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const Appstore = configureStore({
    reducer: {          //reducer for whole App
        cart : cartReducer , // reducer of (each slice has seperate reducer)
    }

});
export default Appstore;