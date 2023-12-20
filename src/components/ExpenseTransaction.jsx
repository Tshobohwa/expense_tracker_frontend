import React, { useEffect, useState } from "react";
import { cathegoryIcons } from "../assets/icons";
import formatTime from "../redux/helpers/formatTime";
import { useSelector } from "react-redux";

const ExpenseTransaction = ({ transaction }) => {
  const { categories } = useSelector((store) => store.categories);
  const icon = useState(
    cathegoryIcons.find((icon) => icon.id === transaction.category_id)
  )[0];

  const [category, setCategory] = useState(
    categories.find((category) => category.id === transaction.category_id)
  );
  useEffect(() => {
    setCategory(
      categories.find((category) => category.id === transaction.category_id)
    );
  }, [categories]);

  return (
    <div className=" w-full px-3 py-4 rounded-xl relative shadow-sm shadow-green-400">
      <p className=" w-full text-end my-2 right-2 text-blue-800 text-sm">
        {formatTime(transaction.created_at)}
      </p>
      <div className=" w-full flex items-center gap-5">
        <div className=" w-[70px] h-[70px] rounded-xl bg-red-200 flex items-center justify-center">
          <img src={icon?.image} alt="" className=" w-[50%]" />
        </div>
        <div className=" flex flex-col">
          <p className=" text-red-500 font-bold">{category?.name}</p>
          <p className=" font-bold text-xl text-red-700">
            {transaction.amount} Frw
          </p>
          <p className=" text-sm">{transaction.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTransaction;
