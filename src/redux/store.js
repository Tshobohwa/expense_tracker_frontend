import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./slices/appStateSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
  },
});

export default store;
