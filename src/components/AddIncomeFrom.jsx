import React from "react";
import FormsContainer from "./FormsContainer";

const AddIncomeFrom = () => {
  return (
    <FormsContainer>
      <div className=" w-full rounded-3xl bg-white p-3 flex flex-col gap-6 shadow-lg items-center">
        <h2 className=" font-bold text-xl">Add income</h2>
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
          <div className=" w-full flex justify-between">
            <button className=" w-[48%] h-[60px] rounded-2xl flex items-center justify-center text-green-700 border border-green-700">
              discard
            </button>
            <button className=" w-[48%] h-[60px] rounded-2xl flex items-center justify-center text-white bg-green-700">
              add
            </button>
          </div>
        </div>
      </div>
    </FormsContainer>
  );
};

export default AddIncomeFrom;
