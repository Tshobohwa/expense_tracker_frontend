import React from "react";

const ExpenseChartContainer = () => {
  return (
    <div className=" w-full bg-red-950 rounded-md relative p-2 h-[300px]">
      <button className=" h-[30px] rounded-[15px] px-5 bg-red-700 text-white absolute top-2 right-2">
        new expense
      </button>
    </div>
  );
};

export default ExpenseChartContainer;
