import React, { useState } from "react";
import FormsContainer from "./FormsContainer";
import CategorySelector from "./CategorySelector";
import { useSelector } from "react-redux";

const AddExpenseForm = () => {
  const { categories } = useSelector((store) => store.categories);
  const [selectedCategory, setSelectedCategory] = useState(2);
  return (
    <FormsContainer>
      <div className=" w-full rounded-3xl bg-white p-3 flex flex-col gap-6 shadow-lg items-center">
        <h2 className=" font-bold text-xl">New expense</h2>
        <div className=" w-full flex flex-col gap-4">
          <div className=" w-full flex items-center">
            <p>Amount:</p>
            <input
              type="number"
              min={0}
              className=" w-full bg-green-200 h-[50px] mx-3 rounded-xl focus:outline-none focus:border-b-2 text-center text-lg"
            />
          </div>
          <p>Comment:</p>
          <textarea
            className=" w-full rounded-xl bg-green-200 h-[80px] p-2 focus:outline-none"
            cols="30"
            rows="10"
          ></textarea>

          <div className=" w-full">
            <p>Category:</p>
            <div className=" w-full flex">
              {categories.map((category) =>
                category.id === 1 ? (
                  <></>
                ) : (
                  <CategorySelector
                    category={category}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                )
              )}
            </div>
          </div>
          <div className=" w-full flex justify-between">
            <button className=" w-[48%] h-[60px] rounded-2xl flex items-center justify-center text-red-700 border border-red-700">
              discard
            </button>
            <button className=" w-[48%] h-[60px] rounded-2xl flex items-center justify-center text-white bg-red-700">
              add
            </button>
          </div>
        </div>
      </div>
    </FormsContainer>
  );
};

export default AddExpenseForm;
