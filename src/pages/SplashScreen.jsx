import React from "react";
import PageWrapper from "../components/PageWrapper";
import wallet from "../../public/wallet-backgound.jpg";
import { Link } from "react-router-dom";

const SplashScreen = () => {
  return (
    <PageWrapper>
      <div className="w-[100vw] h-[100dvh] bg-cover bg-center bg-black relative">
        <img
          src={wallet}
          alt=""
          className=" w-full h-full object-cover object-center"
        />
        <div className="flex justify-between flex-col items-center gap-3 bg-black/60 h-full w-full p-5 absolute top-0 left-0 right-0 bottom-0">
          <div className="w-full">
            <h1 className="font-bold text-5xl text-yellow-200 mt-9">
              myWallet
            </h1>
          </div>
          <p className=" text-green-200 w-[75%]">
            An easy and simple way to keep track of your expenses.
          </p>
          <div className=" w-full flex flex-col gap-3 items-center">
            <Link
              to={"/login"}
              className=" text-white font-bold text-lg w-full h-[50px] rounded-md bg-green-400 flex items-center justify-center"
            >
              Login
            </Link>

            <p className=" text-red-400">don't have an account?</p>
            <Link
              to={"/signup"}
              className=" text-green-400 font-bold text-lg w-full h-[50px] rounded-md border border-green-400 flex items-center justify-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SplashScreen;
