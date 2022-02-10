import { configureStore } from "@reduxjs/toolkit";
import Counter from "./slices/counterSlice";

export default configureStore({
  reducer: {
    counter: Counter
  },
});
