import React from "react";
import { compensationImg } from "../assets/icons";

const IncomePageTransaction = () => {
  return (
    <div className=" w-full p-4 shadow-sm shadow-green-500 rounded-3xl my-2">
      <div className=" w-full flex gap-8 items-center">
        <div className=" w-[80px] h-[80px] rounded-3xl flex items-center justify-center bg-green-500">
          <img src={compensationImg} className=" w-[40px] h-[40px]" />
        </div>
        <div className="h-full">
          <p className=" text-2xl font-bold text-green-600">243 $</p>
          <p className=" text-sm">received from a friend of mine.</p>
        </div>
      </div>
    </div>
  );
};

export default IncomePageTransaction;
