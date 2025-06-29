import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: true
};

const slice = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    changeTheme: (state, {payload})=>{
        state.theme = payload
    },
 
  },
});

export const {changeTheme } = slice.actions;

export default slice.reducer;