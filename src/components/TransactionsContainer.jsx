import React from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import IncomeTransaction from "./IncomeTransaction";

const TransactionsContainer = () => {
  return (
    <div className=" bg-white rounded-t-3xl pb-[100px] mx-[-8px] px-2 pt-6 flex flex-col items-center">
      <p className=" text-xl text-blue-950 font-bold">Transactions</p>
      <IncomeTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <IncomeTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <IncomeTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
    </div>
  );
};

export default TransactionsContainer;
