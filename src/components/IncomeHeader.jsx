import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAddIncomeForm } from "../redux/slices/appStateSlice";
import addAmount from "../redux/helpers/AddAmounts";

const IncomeHeader = () => {
  const dispatch = useDispatch();
  const addingIncomeClickHandler = () => {
    dispatch(openAddIncomeForm());
  };
  const { incomes } = useSelector((store) => store.transactions);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(addAmount(incomes));
  }, [incomes]);

  return (
    <div className=" sticky top-0 w-full bg-gradient-to-br from-green-600 to-green-900 flex flex-col p-6 pt-3 pb-5 h-[35dvh]">
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
        <span className=" text-4xl">{total} FRW</span>
      </h2>
    </div>
  );
};

export default IncomeHeader;
