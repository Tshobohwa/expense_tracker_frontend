import { useDispatch, useSelector } from "react-redux";
import { exitImg } from "../assets/icons";
import { closeAddTransactionForm } from "../redux/slices/appStateSlice";
import { useEffect } from "react";
import {
  filterTransactions,
  setSentFalse,
} from "../redux/slices/transactionsSlice";

const FormsContainer = ({ children }) => {
  const { sent } = useSelector((store) => store.transactions);
  const dispatch = useDispatch();
  const exitClickHandler = () => {
    dispatch(closeAddTransactionForm());
  };
  useEffect(() => {
    if (!sent) return;
    dispatch(setSentFalse());
    dispatch(filterTransactions());
    dispatch(closeAddTransactionForm());
  }, [sent]);
  return (
    <div className=" fixed bg-black/75 top-0 bottom-0 left-0 right-0 z-50 h-[100vh] w-[100vw] flex items-center justify-center px-5">
      <div className=" w-full h-full relative flex items-center justify-center">
        <button
          className=" font-bold text-2xl text-white absolute right-4 top-4"
          onClick={exitClickHandler}
        >
          <img src={exitImg} className=" w-[40px] h-[40px]" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default FormsContainer;
