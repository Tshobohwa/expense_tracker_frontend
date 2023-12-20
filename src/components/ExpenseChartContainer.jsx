import React, { useEffect, useState } from "react";
import {
  clothesImg,
  foodImg,
  othersImg,
  rentImg,
  transportationImg,
} from "../assets/icons";
import ExpenseChart from "./ExpenseChart";
import { useDispatch, useSelector } from "react-redux";
import { openAddExpenseForm } from "../redux/slices/appStateSlice";
import addAmount from "../redux/helpers/AddAmounts";
const ExpenseChartContainer = () => {
  const dispatch = useDispatch();
  const addExpenseClickHandler = () => {
    dispatch(openAddExpenseForm());
  };
  const { expenses } = useSelector((store) => store.transactions);

  const [foods, setFoods] = useState({
    id: 2,
    name: "food",
    icon: foodImg,
    total: 0,
    color: "#FFA500",
  });
  const [rents, setRents] = useState({
    id: 3,
    name: "rents",
    icon: rentImg,
    total: 0,
    color: "#00C55E",
  });
  const [transportations, setTransportations] = useState({
    id: 4,
    name: "transportations",
    icon: transportationImg,
    total: 0,
    color: "#12AAF2",
  });
  const [clothings, setClothings] = useState({
    id: 5,
    name: "clothings",
    icon: clothesImg,
    total: 0,
    color: "#FF0000",
  });
  const [others, setOthers] = useState({
    id: 6,
    name: "others",
    icon: othersImg,
    total: 0,
    color: "#9CA3AF",
  });
  const [categories, setCategories] = useState([
    foods,
    rents,
    transportations,
    clothings,
    others,
  ]);

  const [max, setMax] = useState(0);

  const findMax = () => {
    const amounts = categories.map((category) => category.total);
    console.log(amounts);
    let max = 0;
    amounts.forEach((amount) => {
      if (amount > max) max = amount;
    });
    setMax(max);
  };

  const setCategoryTotal = (category, setCategory) => {
    const categoryExpenses = [];
    expenses.forEach((expense) => {
      if (expense.category_id === category.id) categoryExpenses.push(expense);
    });
    const categoryExpensesTotal = addAmount(categoryExpenses);
    setCategory({ ...category, total: categoryExpensesTotal });
  };

  useEffect(() => {
    setCategoryTotal(foods, setFoods);
    setCategoryTotal(rents, setRents);
    setCategoryTotal(transportations, setTransportations);
    setCategoryTotal(clothings, setClothings);
    setCategoryTotal(others, setOthers);
  }, [expenses]);

  useEffect(() => {
    setCategories([foods, rents, transportations, clothings, others]);
  }, [foods, rents, transportations, clothings, others]);

  useEffect(() => {
    findMax();
  }, [categories]);

  return (
    <div className=" w-full bg-white rounded-[24px] relative p-2 flex flex-col gap-3 shadow shadow-green-900">
      <p className=" text-2xl font-bold text-blue-950">Expenses</p>
      <button
        className=" h-[30px] rounded-[15px] px-5 bg-red-700 text-white absolute top-2 right-2"
        onClick={addExpenseClickHandler}
      >
        add new
      </button>
      <div className=" w-full flex">
        {categories.map((category) => {
          return (
            <ExpenseChart category={category} max={max} key={category.id} />
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseChartContainer;
