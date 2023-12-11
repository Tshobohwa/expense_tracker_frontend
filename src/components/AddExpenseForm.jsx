import React from "react";
import FormsContainer from "./FormsContainer";

const AddExpenseForm = () => {
  return (
    <FormsContainer>
      <div className=" w-full rounded-3xl bg-white p-3 flex flex-col gap-4 shadow-lg items-center">
        <h2 className=" font-bold text-xl">New expense</h2>
        <div className=" w-full flex flex-col">
          <div className=" w-full flex">
            <p>Amount:</p>
            <input
              type="text"
              className=" w-full border-b border-green-700 focus:outline-none focus:border-b-2"
            />
          </div>
          <p>Comment:</p>
          <textarea
            className=" w-full rounded-xl bg-green-200 h-[80px] p-2 focus:outline-none"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </FormsContainer>
  );
};

export default AddExpenseForm;
