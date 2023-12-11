import React from "react";
import { Link } from "react-router-dom";
import home from "../../public/home.png";
import incomes from "../../public/income.png";
import expenses from "../../public/expenses.png";

const NavBar = () => {
  return (
    <div className=" w-[100vw] h-[60px] sticky bottom-0 flex bg-white shadow shadow-[#d3d3d3] mx-[-8px]">
      <Link className=" w-[33%] flex items-center justify-center">
        <img src={incomes} className=" w-[30px]" />
      </Link>
      <Link className=" w-[34%] flex items-center justify-center">
        <img src={home} className=" w-[30px]" />
      </Link>
      <Link className=" w-[33%] flex items-center justify-center">
        <img src={expenses} className=" w-[30px]" />
      </Link>
    </div>
  );
};

export default NavBar;
