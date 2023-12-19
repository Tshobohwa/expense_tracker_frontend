import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./slices/appStateSlice";
import userReducer from "./slices/userSlice";
import transactionsReducer from "./slices/transactionsSlice";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
    transactions: transactionsReducer,
    categories: categoriesReducer,
  },
});

export default store;
