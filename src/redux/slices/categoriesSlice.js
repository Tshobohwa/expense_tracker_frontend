import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../api";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "store/categories",
  async () => {
    const response = await axios.get(`${API_URL}categories`);
    return response.data;
  }
);

const initialState = JSON.parse(localStorage.getItem("categories")) || {
  categories: [],
  loading: false,
  error: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      return { ...state, categories: payload.categories };
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      return { ...state, error: "an error occured" };
    });
  },
});

export default categoriesSlice.reducer;
