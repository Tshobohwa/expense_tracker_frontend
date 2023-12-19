import React, { useEffect } from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import IncomeTransaction from "./IncomeTransaction";
import { useSelector } from "react-redux";

const TransactionsContainer = () => {
  const { transactions } = useSelector((store) => store.transactions);
  return (
    <div className=" bg-white rounded-t-3xl pb-[20px] mb-[-8px] mx-[-8px] px-2 pt-6 flex flex-col items-center">
      <div className=" h-[40px] w-[100vw] bg-white border-b border-b-green-500 sticky z-30 top-0 flex items-center justify-center left-0 right-0">
        <p className=" text-xl text-blue-950 font-bold">Transactions</p>
      </div>
      {transactions.map((transaction) => {
        return transaction?.category_id === 1 ? (
          <IncomeTransaction transaction={transaction} />
        ) : (
          <ExpenseTransaction transaction={transaction} />
        );
      })}
    </div>
  );
};

export default TransactionsContainer;
