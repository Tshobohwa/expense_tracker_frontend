import React from "react";
import Transaction from "./Transaction";

const IncomesContainer = () => {
  return (
    <div className=" sticky bottom-0 w-full h-[80dvh] mt-[-20px] rounded-[20px] z-20 bg-white overflow-scroll">
      <div className="  flex items-center w-full h-[60px] justify-center">
        <p className=" font-bold text-green-900">Incomes:</p>
      </div>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
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

export default IncomesContainer;
