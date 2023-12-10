import React from "react";
import {
  clothesImg,
  foodImg,
  othersImg,
  rentImg,
  transportationImg,
} from "../assets/icons";
import ExpenseChart from "./ExpenseChart";
const ExpenseChartContainer = () => {
  const categories = [
    {
      id: 1,
      amount: 80,
      name: "food",
      icon: foodImg,
      color: "#FFA500",
    },
    {
      id: 2,
      name: "transportation",
      amount: 30,
      icon: transportationImg,
      color: "#12AAF2",
    },
    {
      id: 3,
      name: "clothes",
      amount: 50,
      icon: clothesImg,
      color: "#FF0000",
    },
    {
      id: 4,
      name: "rent",
      amount: 50,
      icon: rentImg,
      color: "#00C55E",
    },
    {
      id: 5,
      name: "others",
      amount: 90,
      icon: othersImg,
      color: "#9CA3AF",
    },
  ];
  return (
    <div className=" w-full bg-white rounded-md relative p-2 flex flex-col gap-3 shadow-md shadow-green-900">
      <p className=" text-2xl font-bold text-blue-950">Expenses</p>
      <button className=" h-[30px] rounded-[15px] px-5 bg-red-700 text-white absolute top-2 right-2">
        add new
      </button>
      <div className=" w-full flex">
        {categories.map((category) => {
          return <ExpenseChart category={category} />;
        })}
      </div>
    </div>
  );
};

export default ExpenseChartContainer;
