import React from "react";
import PageWrapper from "../components/PageWrapper";

const SignUp = () => {
  return (
    <PageWrapper>
      <div className="w-[100vw] h-[100vh] bg-wallet bg-cover bg-center">
        <div className="flex justify-between flex-col items-center gap-3 bg-black/60 h-full w-full p-5">
          <div className="w-full">
            <h1 className="font-bold text-3xl text-yellow-200 mt-9">
              myWallet
            </h1>
          </div>
          <div className=" w-full flex flex-col gap-4">
            <input
              type="email"
              placeholder="email adress"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
            />
            <input
              type="text"
              placeholder="first name"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
            />
            <input
              type="text"
              placeholder="last name"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
            />
            <input
              type="password"
              placeholder="password"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
            />
            <input
              type="password"
              placeholder="confirm password"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
            />
          </div>
          <div className=" w-full flex flex-col gap-3 items-center">
            <button className=" text-white font-bold text-lg w-full h-[50px] rounded-md bg-green-400 ">
              sign up
            </button>
            <p className=" text-white">
              already have an account?{" "}
              <a href="/login" className=" text-green-400 font-bold underline">
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SignUp;