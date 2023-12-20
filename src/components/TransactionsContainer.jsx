import React, { useEffect } from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import IncomeTransaction from "./IncomeTransaction";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const TransactionsContainer = () => {
  const { transactions, loading } = useSelector((store) => store.transactions);
  return (
    <div className=" bg-white rounded-t-3xl pb-[20px] mb-[-8px] mx-[-8px] px-2 pt-6 flex flex-col items-center">
      <div className=" h-[40px] w-[100vw] bg-white border-b border-b-green-500 sticky z-30 top-0 flex items-center justify-center left-0 right-0">
        <p className=" text-xl text-blue-950 font-bold">Transactions</p>
      </div>
      {loading ? (
        <div className="h-[60dvh] w-full flex items-center justify-center">
          <BeatLoader color="rgb(34, 197, 94)" />
        </div>
      ) : (
        transactions.map((transaction) => {
          return transaction?.category_id === 1 ? (
            <IncomeTransaction transaction={transaction} key={transaction.id} />
          ) : (
            <ExpenseTransaction
              transaction={transaction}
              key={transaction.id}
            />
          );
        })
      )}
    </div>
  );
};

export default TransactionsContainer;
