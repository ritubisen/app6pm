import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    mytodo: myReducer,
  },
});

export default store;