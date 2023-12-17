import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../api";

const unauthenticatedUser = {
  loading: false,
  error: "",
  authenticated: false,
  currentUser: {},
};

const initialState =
  JSON.parse(localStorage.getItem("user")) || unauthenticatedUser;

export const signUp = createAsyncThunk("user/signUp", async (user) => {
  const response = await axios.post(`${BASE_URL}users`, { user });
  return response.data;
});

export const login = createAsyncThunk("user/login", async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}users/sign_in`, { user });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
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
        const authenticatedUser = {
          ...state,
          loading: false,
          authenticated: true,
          currentUser: payload.user,
        };
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        return authenticatedUser;
      }
    });
    builder.addCase(login.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      if (payload.status.code === 401) {
        return { ...state, loading: false, error: "Wrong email or password" };
      }
      const { user, token } = payload;
      const logedInState = {
        ...state,
        currentUser: user,
        token: token,
        authenticated: true,
      };
      localStorage.setItem("user", JSON.stringify(logedInState));
      return logedInState;
    });
    builder.addCase(login.rejected, (state) => {
      return { ...state, error: "an error occured", loading: false };
    });
  },
});

export default userSlice.reducer;
