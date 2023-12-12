import React from "react";
import { useDispatch } from "react-redux";
import { openAddIncomeForm } from "../redux/slices/appStateSlice";

const IncomeHeader = () => {
  const dispatch = useDispatch();
  const addingIncomeClickHandler = () => {
    dispatch(openAddIncomeForm());
  };
  return (
    <div className=" sticky top-0 w-full bg-gradient-to-br from-green-600 to-green-900 flex flex-col p-6 pt-3 pb-5 h-[25dvh]">
      <div className=" w-full flex items-center justify-end">
        <button
          className=" text-3xl text-white font-semibold"
          onClick={addingIncomeClickHandler}
        >
          +
        </button>
      </div>
      <h1 className=" text-white text-3xl font-bold">Incomes:</h1>
      <h2 className=" font-bold text-white">
        total:
        <span className=" text-4xl">3000 FRW</span>
      </h2>
    </div>
  );
};

export default IncomeHeader;
