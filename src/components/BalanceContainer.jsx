import React from "react";

const BalanceContainer = () => {
  return (
    <div className=" w-full px-2 py-9 rounded-md  bg-gradient-to-r from-slate-950 to-black relative flex flex-col gap-3 items-center justify-center">
      <button className=" w-[50px] h-[50px] rounded-md absolute top-2 right-2 bg-green-500 text-2xl font-bold text-white">
        +
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
