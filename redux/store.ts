import navReducer from "./slices";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        nav: navReducer
    }
});