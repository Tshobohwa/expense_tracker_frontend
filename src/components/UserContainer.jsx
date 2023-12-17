import React from "react";
import { useSelector } from "react-redux";

const UserContainer = () => {
  const { currentUser } = useSelector((store) => store.user);
  return (
    <div className=" w-full flex flex-col gap-3">
      <p className=" text-3xl font-extrabold text-green-900">Hello</p>
      <h1 className=" text-4xl font-extrabold text-blue-950 w-[200px]">
        {`${currentUser.first_name} ${currentUser.last_name}`}
      </h1>
    </div>
  );
};

export default UserContainer;
