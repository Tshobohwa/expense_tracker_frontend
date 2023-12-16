import React from "react";
import { foodImg } from "../assets/icons";

const ExpensePageComponent = () => {
  return (
    <div className=" w-full p-4 shadow-sm shadow-red-500 rounded-3xl my-2">
      <div className=" w-full flex gap-8 items-center">
        <div className=" w-[80px] h-[80px] rounded-3xl flex items-center justify-center bg-red-300">
          <img src={foodImg} className=" w-[40px] h-[40px]" />
        </div>
        <div className="h-full">
          <p className=" text-2xl font-bold text-red-600">243 $</p>
          <p className=" text-sm">received from a friend of mine.</p>
        </div>
      </div>
    </div>
  );
};

export default ExpensePageComponent;
