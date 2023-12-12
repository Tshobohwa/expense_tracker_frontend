import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: "",
  authenticated: false,
  currentUser: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
