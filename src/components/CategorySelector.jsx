import React, { useState } from "react";
import { cathegoryIcons } from "../assets/icons";

const CategorySelector = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  const icon = useState(
    cathegoryIcons.find((icon) => icon.id === category.id)
  )[0];

  return (
    <button
      className="w-[20%] flex items-center justify-center"
      onClick={() => {
        setSelectedCategory(category.id);
        console.log(category.id);
      }}
    >
      <div
        className={`h-[50px] w-[50px] bg-green-200 rounded-2xl flex justify-center items-center ${
          selectedCategory === category.id ? "border-2 border-red-500" : ""
        }`}
      >
        <img src={icon?.image} className="h-[30px] w-[30px]" />
      </div>
    </button>
  );
};

export default CategorySelector;
