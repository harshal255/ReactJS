// if i have only one slice for configuration

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux/themeSlice";


export const store = configureStore({
    //multiple reducer can be
    reducer: themeReducer
})

