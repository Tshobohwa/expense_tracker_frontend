import React from "react";
import { compensationImg } from "../assets/icons";
import formatTime from "../redux/helpers/formatTime";

const IncomePageTransaction = ({ income }) => {
  return (
    <div className=" w-full p-4 shadow-sm shadow-green-500 rounded-3xl my-2">
      <p className=" text-sm w-full text-end">
        {formatTime(income.created_at)}
      </p>
      <div className=" w-full flex gap-8 items-center">
        <div className=" w-[80px] h-[80px] rounded-3xl flex items-center justify-center bg-green-500">
          <img src={compensationImg} className=" w-[40px] h-[40px]" />
        </div>
        <div className="h-full">
          <p className=" text-2xl font-bold text-green-600">
            {income.amount} Frw
          </p>
          <p className=" text-sm">{income.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomePageTransaction;
