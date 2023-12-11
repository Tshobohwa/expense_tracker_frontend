import React from "react";

const FormsContainer = ({ children }) => {
  return (
    <div className=" sticky bg-black/75 top-0 bottom-0 left-0 right-0 z-50 h-[100vh] w-[100vw] m-[-8px] mt-[-10px] flex items-center justify-center px-5">
      <button></button>
      {children}
    </div>
  );
};

export default FormsContainer;
