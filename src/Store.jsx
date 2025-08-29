import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    mycounter: myReducer
  }
});

export default store;