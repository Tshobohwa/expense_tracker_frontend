import React from "react";
import incomeIcon from "../../public/compensation.png";

const IncomeTransaction = () => {
  return (
    <div className=" w-full rounded-xl px-4 py-7 my-4 bg-gradient-to-br from-green-300 to-green-500 text-white flex items-center gap-3 relative">
      <p className=" absolute top-3 right-3 text-sm">jeudi 14/01/2023 15:30</p>
      <div className=" w-[80px] h-[80px] object-contain">
        <img src={incomeIcon} className=" w-full h-full" />
      </div>
      <div className=" flex flex-col ">
        <p className="font-semibold">Income</p>
        <p className=" text-xl font-bold">23 000 $</p>
        <p className=" text-sm">received from a friend of mine.</p>
      </div>
    </div>
  );
};

export default IncomeTransaction;
