const FormsContainer = ({ children }) => {
  return (
    <div className=" sticky bg-black/75 top-0 bottom-0 left-0 right-0 z-50 h-[100vh] w-[100vw] m-[-8px] mt-[-10px] flex items-center justify-center px-5">
      <div className=" w-full h-full relative flex items-center justify-center">
        <button className=" font-bold text-2xl text-white absolute right-4 top-4">
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default FormsContainer;
