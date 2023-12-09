import React from "react";
import PageWrapper from "../components/PageWrapper";

const SplashScreen = () => {
  return (
    <PageWrapper>
      <div className="w-[100vw] h-[100vh] bg-wallet bg-cover bg-center">
        <div className="flex justify-between flex-col items-center gap-3 bg-black/60 h-full w-full p-5">
          <div className="w-full">
            <h1 className="font-bold text-5xl text-yellow-200 mt-9">
              myWallet
            </h1>
          </div>
          <p className=" text-green-200 w-[75%]">
            An easy and simple way to keep track of your expenses.
          </p>
          <div className=" w-full flex flex-col gap-3 items-center">
            <a
              className=" text-white font-bold text-lg w-full h-[50px] rounded-md bg-green-400 "
              href="login"
            >
              Login
            </a>
            <p className=" text-red-400">don't have an account?</p>
            <a
              className=" text-green-400 font-bold text-lg w-full h-[50px] rounded-md border border-green-400 "
              href="/signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SplashScreen;
