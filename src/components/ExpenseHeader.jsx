import React from "react";
import { useDispatch } from "react-redux";
import { openAddExpenseForm } from "../redux/slices/appStateSlice";

const ExpenseHeader = () => {
  const dispatch = useDispatch();
  const addExpenseClickHandler = () => {
    dispatch(openAddExpenseForm());
  };
  return (
    <div className=" sticky top-0 w-full bg-gradient-to-br from-red-600 to-red-900 flex flex-col p-6 pt-3 pb-5 h-[25dvh]">
      <div className=" w-full flex items-center justify-end">
        <button
          className=" text-3xl text-white font-semibold"
          onClick={addExpenseClickHandler}
        >
          +
        </button>
      </div>
      <h1 className=" text-white text-3xl font-bold">Expenses</h1>
      <h2 className=" font-bold text-white">
        total:
        <span className=" text-4xl">3000 FRW</span>
      </h2>
    </div>
  );
};

export default ExpenseHeader;
