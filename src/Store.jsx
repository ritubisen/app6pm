import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./ColorSlice";

const store = configureStore({
  reducer: {
    mycolor: colorReducer
  }
});

export default store;
