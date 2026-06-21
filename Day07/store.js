import { configureStore } from "@reduxjs/toolkit";

import slice1Reducer from "./slicer";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    slice1: slice1Reducer,
    search: searchReducer,
  },
});

export default store;