import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, BASE_URL } from "../api";
import axios from "axios";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async ({ token, user_id }) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const url = `${API_URL}/users/${user_id}/transactions`;

    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const postTransaction = createAsyncThunk(
  "transactions/postTransaction",
  async ({ token, transaction }) => {
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // You may need to adjust this based on your API requirements
      },
    });
    const response = await axios.post(
      `${API_URL}users/1/transactions`,
      transaction
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  error: "",
  transactions: [],
  expenses: [],
  incomes: [],
  sent: false,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    filterTransactions: (state) => {
      const { transactions } = state;
      const expenses = [];
      const incomes = [];
      transactions.forEach((transaction) =>
        transaction.category_id === 1
          ? incomes.push(transaction)
          : expenses.push(transaction)
      );
      return { ...state, expenses, incomes };
    },
    setSentFalse: (state) => {
      return { ...state, sent: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactions.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchTransactions.fulfilled, (state, { payload }) => {
      let { transactions } = payload;
      transactions = transactions.map((transaction) => {
        const { amount } = transaction;
        return { ...transaction, amount: Number.parseInt(amount) };
      });
      const expenses = [];
      const incomes = [];
      transactions.forEach((transaction) =>
        transaction.category_id === 1
          ? incomes.push(transaction)
          : expenses.push(transaction)
      );
      return {
        ...state,
        loading: false,
        transactions,
        incomes,
        expenses,
      };
    });
    builder.addCase(fetchTransactions.rejected, (state) => {
      return { ...state, loading: false, error: "An error occured" };
    });
    builder.addCase(postTransaction.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(postTransaction.fulfilled, (state, { payload }) => {
      const { transactions } = state;
      let { transaction } = payload;
      const { amount } = transaction;
      transaction = { ...transaction, amount: Number.parseInt(amount) };
      return {
        ...state,
        loading: false,
        transactions: [transaction, ...transactions],
        sent: true,
      };
    });
    builder.addCase(postTransaction.rejected, (state) => {
      return { ...state, loading: false, error: "An error occured" };
    });
  },
});

export const { filterTransactions, setSentFalse } = transactionsSlice.actions;

export default transactionsSlice.reducer;
