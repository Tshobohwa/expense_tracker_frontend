import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAddExpenseForm } from "../redux/slices/appStateSlice";
import addAmount from "../redux/helpers/AddAmounts";

const ExpenseHeader = () => {
  const dispatch = useDispatch();
  const addExpenseClickHandler = () => {
    dispatch(openAddExpenseForm());
  };
  const { expenses } = useSelector((store) => store.transactions);
  const [total, setTotal] = useState(addAmount(expenses));
  useEffect(() => {
    setTotal(addAmount(expenses));
  }, [expenses]);
  return (
    <div className=" sticky top-0 w-full bg-gradient-to-br from-red-600 to-red-900 flex flex-col p-6 pt-3 pb-5 h-[35dvh]">
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
        <span className=" text-4xl">{total} FRW</span>
      </h2>
    </div>
  );
};

export default ExpenseHeader;
