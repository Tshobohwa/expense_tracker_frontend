import React from "react";

const BalanceContainer = () => {
  return (
    <div className=" w-full p-2 rounded-md bg-slate-950 relative flex flex-col gap-3">
      <button className=" w-[50px] h-[50px] rounded-md absolute top-2 right-2 bg-green-500 text-2xl font-bold text-white">
        +
      </button>
      <p className=" text-2xl text-green-500 font-bold">18 900 $</p>
      <p className=" text-green-500">incomes: 24 000 $</p>
      <p className=" text-red-500">expenses: 5 100 $</p>
    </div>
  );
};

export default BalanceContainer;
