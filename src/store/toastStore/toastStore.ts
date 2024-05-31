import { configureStore } from "@reduxjs/toolkit";
import toastsReducer from "./reducer";

const toastsStore = configureStore({
  reducer: toastsReducer,
});

export default toastsStore;
