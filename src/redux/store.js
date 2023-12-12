import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./slices/appStateSlice";
const store = configureStore({
  reducer: {
    appState: appStateReducer,
  },
});

export default store;
