import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "mycolor",
  initialState: {
    color: "red"
  },
  reducers: {
    colorChange: (state , actions) => {
console.log(actions);
console.log(actions.payload);
      state.color = actions.payload;
    }
  }
});

export const { colorChange } = colorSlice.actions;
export default colorSlice.reducer;