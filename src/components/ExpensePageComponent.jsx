import React, { useState } from "react";
import { cathegoryIcons } from "../assets/icons";
import formatTime from "../redux/helpers/formatTime";

const ExpensePageComponent = ({ expense }) => {
  const icon = useState(
    cathegoryIcons.find((icon) => icon.id === expense.category_id)
  )[0];
  return (
    <div className=" w-full p-4 shadow-sm shadow-red-500 rounded-3xl my-2">
      <p className=" text-sm w-full text-end">
        {formatTime(expense.created_at)}
      </p>
      <div className=" w-full flex gap-8 items-center">
        <div className=" w-[80px] h-[80px] rounded-3xl flex items-center justify-center bg-red-300">
          <img src={icon.image} className=" w-[40px] h-[40px]" />
        </div>
        <div className="h-full">
          <p className=" text-2xl font-bold text-red-600">
            {expense.amount} Frw
          </p>
          <p className=" text-sm">{expense.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpensePageComponent;
