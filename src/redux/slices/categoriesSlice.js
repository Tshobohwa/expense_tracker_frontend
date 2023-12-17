import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchCategories = createAsyncThunk("store/categories", () => {});

const initialState = JSON.parse(localStorage.getItem("categories")) || {
  categories: {},
  loading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  extraReducers: (builder) => {
    builder.addCase();
  },
});
