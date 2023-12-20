import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAddIncomeForm } from "../redux/slices/appStateSlice";
import addAmount from "../redux/helpers/AddAmounts";
import { BeatLoader } from "react-spinners";

const BalanceContainer = () => {
  const { incomes, expenses, loading } = useSelector(
    (store) => store.transactions
  );
  const [incomesTotal, setIncomesTotal] = useState(addAmount(incomes));
  const [expensesTotal, setExpensesTotal] = useState(addAmount(expenses));
  const dispatch = useDispatch();
  const addingIncomeClickHandler = () => {
    dispatch(openAddIncomeForm());
  };
  useEffect(() => {
    setIncomesTotal(addAmount(incomes));
  }, [incomes]);
  useEffect(() => {
    setExpensesTotal(addAmount(expenses));
  }, [expenses]);

  return (
    <div className=" w-full px-2 py-10 rounded-[24px]  bg-gradient-to-br from-blue-900 to-black shadow-md shadow-black relative flex flex-col gap-3 items-center justify-center">
      <button
        className=" h-[30px] rounded-[15px] px-5 bg-green-500 text-white absolute top-2 right-2"
        onClick={addingIncomeClickHandler}
      >
        add income
      </button>
      {loading ? (
        <div className="h-[100px] flex items-center justify-center">
          <BeatLoader color="rgb(34, 197,94) " />
        </div>
      ) : (
        <>
          <p
            className={` text-5xl font-bold
      ${incomesTotal - expensesTotal < 0 ? " text-red-500" : " text-green-500"}
      `}
          >
            {incomesTotal - expensesTotal} Frw
          </p>
          <div className=" flex flex-col gap-1">
            <p className=" text-green-500">incomes: {incomesTotal} Frw</p>
            <p className=" text-red-500">expenses: {expensesTotal} Frw</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BalanceContainer;
