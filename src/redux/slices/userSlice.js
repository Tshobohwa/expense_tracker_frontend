import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api";

const initialState = {
  loading: false,
  error: "",
  authenticated: false,
  currentUser: {},
};

export const signUp = createAsyncThunk("user/signUp", async (user) => {
  const response = await axios.post(`${BASE_URL}users`, { user });
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: true, error: "" };
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      if (payload.status.code === 422)
        return { ...state, loading: false, error: payload.error };
      else if (payload.status.code === 200) {
        return {
          ...state,
          loading: false,
          authenticated: true,
          currentUser: payload.user,
        };
      }
    });
  },
});

export default userSlice.reducer;
