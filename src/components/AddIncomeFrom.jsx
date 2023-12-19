import React, { useState } from "react";
import FormsContainer from "./FormsContainer";
import { useDispatch, useSelector } from "react-redux";
import { postTransaction } from "../redux/slices/transactionsSlice";

const AddIncomeFrom = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.user);
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
  const [amountError, setAmountError] = useState("");
  const [commentError, setCommentError] = useState("");
  const [error, setError] = useState(false);

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const commentChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    setError(false);
    if (comment === "") {
      setCommentError("comment can't be empty");
      setError(true);
    }
    if (amount === 0) {
      setAmountError("Please add an amount");
      setError(true);
    }
    if (!error) {
      dispatch(
        postTransaction({
          transaction: {
            user_id: currentUser.id,
            amount,
            category_id: 1,
            comment,
          },
        })
      );
    }
  };
  return (
    <FormsContainer>
      <div className=" w-full rounded-3xl bg-white p-3 flex flex-col gap-6 shadow-lg items-center">
        <h2 className=" font-bold text-xl">Add income</h2>
        <div className=" w-full flex flex-col gap-4">
          <div className=" w-full flex items-center">
            <p>Amount:</p>
            <input
              type="number"
              min={0}
              className=" w-full bg-green-200 h-[50px] mx-3 rounded-xl focus:outline-none focus:border-b-2 text-center text-lg"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <p className=" text-red-500">{amountError}</p>
          <p>Comment:</p>
          <textarea
            className=" w-full rounded-xl bg-green-200 h-[80px] p-2 focus:outline-none"
            cols="30"
            rows="10"
            value={comment}
            onChange={commentChangeHandler}
          ></textarea>
          <p className=" text-red-500">{commentError}</p>
          <div className=" w-full flex justify-between">
            <button className=" w-[48%] h-[60px] rounded-2xl flex items-center justify-center text-green-700 border border-green-700">
              discard
            </button>
            <button
              className=" w-[48%] h-[60px] rounded-2xl flex items-center justify-center text-white bg-green-700"
              onClick={submithandler}
            >
              add
            </button>
          </div>
        </div>
      </div>
    </FormsContainer>
  );
};

export default AddIncomeFrom;
