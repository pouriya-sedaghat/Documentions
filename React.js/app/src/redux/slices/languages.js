import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "EN",
};

const languages = createSlice({
  name: "languages",
  initialState,
  reducers: {
    CHANGE_LANGUAGE: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { CHANGE_LANGUAGE } = languages.actions;
export default languages.reducer;
