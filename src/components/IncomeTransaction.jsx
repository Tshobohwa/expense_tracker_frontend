import React from "react";
import incomeIcon from "../../public/compensation.png";
import formatTime from "../redux/helpers/formatTime";

const IncomeTransaction = ({ transaction }) => {
  return (
    <div className=" w-full rounded-xl px-4 py-3 my-4 bg-gradient-to-br from-green-300 to-green-500 text-white relative">
      <p className=" w-full text-end  text-sm">
        {formatTime(transaction.created_at)}
      </p>
      <div className=" w-full  flex items-center gap-3">
        <div className=" w-[80px] h-[80px] object-contain">
          <img src={incomeIcon} className=" w-full h-full" />
        </div>
        <div className=" flex flex-col ">
          <p className="font-semibold">Income</p>
          <p className=" text-xl font-bold">{transaction.amount} Frw</p>
          <p className=" text-sm">{transaction.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeTransaction;
