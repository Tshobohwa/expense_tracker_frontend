import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addingIncome: false,
  addingExpense: false,
};

const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    openAddIncomeForm: (state) => {
      return { ...state, addingIncome: true };
    },
    openAddExpenseForm: (state) => {
      return { ...state, addingExpense: true };
    },
    closeAddTransactionForm: (state) => {
      return { ...state, addingExpense: false, addingIncome: false };
    },
  },
});

export const {
  openAddExpenseForm,
  openAddIncomeForm,
  closeAddTransactionForm,
} = appStateSlice.actions;

export default appStateSlice.reducer;
