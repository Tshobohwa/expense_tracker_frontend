import React from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import IncomeTransaction from "./IncomeTransaction";

const TransactionsContainer = () => {
  return (
    <div className=" bg-white rounded-t-3xl pb-[20px] mb-[-8px] mx-[-8px] px-2 pt-6 flex flex-col items-center">
      <div className=" h-[40px] w-[100vw] bg-white border-b border-b-green-500 sticky z-50 top-0 flex items-center justify-center left-0 right-0">
        <p className=" text-xl text-blue-950 font-bold">Transactions</p>
      </div>
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
    </div>
  );
};

export default TransactionsContainer;
