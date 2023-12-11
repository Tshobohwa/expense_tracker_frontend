import React from "react";
import {
  clothesImg,
  foodImg,
  othersImg,
  rentImg,
  transportationImg,
} from "../assets/icons";

const CategorySelector = () => {
  return (
    <div className=" w-full">
      <p>Category:</p>
      <div className=" w-full flex">
        <div className=" w-[20%] flex items-center justify-center">
          <div className=" h-[50px] w-[50px] bg-green-200  rounded-2xl flex justify-center items-center">
            <img src={foodImg} className=" h-[30px] w-[30px]" />
          </div>
        </div>
        <div className=" w-[20%] flex items-center justify-center">
          <div className=" h-[50px] w-[50px] bg-green-200  rounded-2xl flex justify-center items-center">
            <img src={rentImg} className=" h-[30px] w-[30px]" />
          </div>
        </div>
        <div className=" w-[20%] flex items-center justify-center">
          <div className=" h-[50px] w-[50px] bg-green-200  rounded-2xl flex justify-center items-center">
            <img src={transportationImg} className=" h-[30px] w-[30px]" />
          </div>
        </div>
        <div className=" w-[20%] flex items-center justify-center">
          <div className=" h-[50px] w-[50px] bg-green-200  rounded-2xl flex justify-center items-center">
            <img src={clothesImg} className=" h-[30px] w-[30px]" />
          </div>
        </div>
        <div className=" w-[20%] flex items-center justify-center">
          <div className=" h-[50px] w-[50px] bg-green-200  rounded-2xl flex justify-center items-center">
            <img src={othersImg} className=" h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
