import { configureStore } from "@reduxjs/toolkit";

import languagesReducer from "./slices/languages";

export const store = configureStore({
  reducer: { languages: languagesReducer },
});
