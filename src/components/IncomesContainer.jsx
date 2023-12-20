import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";
import IncomePageTransaction from "./IncomePageTransaction";
import { useSelector } from "react-redux";
import addAmount from "../redux/helpers/AddAmounts";

const IncomesContainer = () => {
  const { incomes } = useSelector((store) => store.transactions);
  return (
    <div className=" sticky bottom-0 w-full h-[70dvh] mt-[-20px] rounded-[20px] z-20 bg-white overflow-scroll px-4">
      <div className="  flex items-center w-full h-[60px] justify-center">
        <p className=" font-bold text-red-900">Incomes</p>
      </div>
      <div className=" w-full flex flex-col">
        {incomes.map((income) => (
          <IncomePageTransaction income={income} key={income.id} />
        ))}
      </div>
    </div>
  );
};

export default IncomesContainer;
