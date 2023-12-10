import React from "react";

const ExpenseChart = ({ category }) => {
  return (
    <div className=" w-[20%] m-2 flex flex-col gap-2 items-center">
      <p style={{ color: category.color }}>{`${category.amount} %`}</p>
      <div className=" w-full h-[300px] flex flex-col justify-end items-center gap-3">
        <div
          className={`w-[20px] rounded-lg bg-[${category.color}] bg-gray-400`}
          style={{
            height: `${category.amount * 3}px`,
            backgroundColor: category.color,
          }}
        ></div>
      </div>
      <img src={category.icon} alt="" className={` w-[75%] object-contain `} />
    </div>
  );
};

export default ExpenseChart;