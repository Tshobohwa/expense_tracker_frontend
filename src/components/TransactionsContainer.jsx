import React from "react";
import ExpenseTransaction from "./ExpenseTransaction";

const TransactionsContainer = () => {
  return (
    <div className=" bg-white rounded-t-3xl pb-8 mx-[-8px] px-2 pt-6 flex flex-col items-center">
      <p className=" text-green-700 font-bold">Transactions</p>
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
      <ExpenseTransaction />
    </div>
  );
};

export default TransactionsContainer;
