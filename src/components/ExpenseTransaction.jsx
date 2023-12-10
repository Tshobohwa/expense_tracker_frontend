import React from "react";
import { foodImg } from "../assets/icons";

const ExpenseTransaction = ({ expense }) => {
  return (
    <div className=" w-full px-3 py-4 rounded-xl relative shadow shadow-green-400">
      <p className=" absolute top-2 right-2 text-blue-800 text-sm">
        jeudi 13/05/2002 14:45
      </p>
      <div className=" w-full flex items-center">
        <div className=" w-[70px] h-[70px] rounded bg-green-50 flex items-center justify-center">
          <img src={foodImg} alt="" className=" w-[50%]" />
        </div>
        <div className=" flex flex-col">
          <p className=" font-bold text-xl text-red-700">3645.43 $</p>
          <p className=" text-sm">expense made for medical purpose</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTransaction;
