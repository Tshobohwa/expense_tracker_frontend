import React from "react";
import Transaction from "./Transaction";

const ExpensesContainer = () => {
  return (
    <div className=" sticky bottom-0 w-full h-[80dvh] mt-[-20px] rounded-[20px] z-20 bg-white overflow-scroll px-4">
      <div className="  flex items-center w-full h-[60px] justify-center">
        <p className=" font-bold text-red-900">Expenses</p>
      </div>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  );
};

export default ExpensesContainer;
