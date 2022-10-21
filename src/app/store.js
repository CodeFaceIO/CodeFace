import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index";

const reducerInvoker = () => {
  return {
    reducer: rootReducer,
  };
};

export const store = configureStore(reducerInvoker());
