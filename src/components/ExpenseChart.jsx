import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import addAmount from "../redux/helpers/AddAmounts";

const ExpenseChart = ({ category, max }) => {
  const { expenses } = useSelector((store) => store.transactions);
  const [percent, setPercent] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const totalExpenses = addAmount(expenses);
    setPercent(Math.round((category.total * 100) / totalExpenses));
  }, [expenses, category]);
  useEffect(() => {
    setHeight(Math.floor((category.total / max) * 300));
  }, [category, max]);
  return (
    <div className=" w-[20%] m-2 flex flex-col gap-2 items-center">
      <p style={{ color: category.color }}>{`${percent || 0} %`}</p>
      <div className=" w-full h-[300px] flex flex-col justify-end items-center gap-3">
        <div
          className={`w-full rounded-lg bg-[${category.color}] bg-gray-400`}
          style={{
            height: `${height}px`,
            backgroundColor: category.color,
          }}
        ></div>
      </div>
      <img src={category.icon} alt="" className={` w-[75%] object-contain `} />
    </div>
  );
};

export default ExpenseChart;
