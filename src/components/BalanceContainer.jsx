import React from "react";

const BalanceContainer = () => {
  return (
    <div className=" w-full px-2 py-10 rounded-[24px]  bg-gradient-to-r from-slate-950 to-black relative flex flex-col gap-3 items-center justify-center">
      <button className=" h-[30px] rounded-[15px] px-5 bg-green-500 text-white absolute top-2 right-2">
        add income
      </button>
      <p className=" text-5xl text-green-500 font-bold">18 900 $</p>
      <div className=" flex flex-col gap-1">
        <p className=" text-green-500">incomes: 24 000 $</p>
        <p className=" text-red-500">expenses: 5 100 $</p>
      </div>
    </div>
  );
};

export default BalanceContainer;
