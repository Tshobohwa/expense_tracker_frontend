import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { Link, useNavigate } from "react-router-dom";
import wallet from "../../public/wallet-backgound.jpg";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/slices/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSlice = useSelector((store) => store.user);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailChangeHandler = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const firstNameChangeHandler = (e) => {
    const text = e.target.value;
    setFirstName(text);
  };

  const lastNameChangeHandler = (e) => {
    const text = e.target.value;
    setLastName(text);
  };

  const passwordChangeHandler = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const confirmPasswordChangeHandler = (e) => {
    const text = e.target.value;
    setConfirmPassword(text);
  };

  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) return;
    setEmailError("Invalid email adress");
    setError(true);
  };

  const validateTextField = (textField, callBack, name) => {
    if (textField !== "") return;
    callBack(`${name} must not be empty!`);
    setError(true);
  };

  const validatePasswords = () => {
    if (password === confirmPassword) return;
    setConfirmPasswordError("Passwords don't match");
    setError(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEmailError("");
    setLastNameError("");
    setFirstNameError("");
    setConfirmPasswordError("");
    setPasswordError("");

    setError(false);
    validateEmail(email);
    validateTextField(email, setEmailError, "Email");
    validateTextField(firstName, setFirstNameError, "First name");
    validateTextField(lastName, setLastNameError, "Last name");
    validateTextField(password, setPasswordError, "password");
    validateTextField(
      confirmPassword,
      setConfirmPasswordError,
      "Confirm password"
    );
    validatePasswords();

    if (error) return;

    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password,
    };

    dispatch(signUp(user));
  };

  return (
    <PageWrapper>
      <div className="w-[100vw] h-[100dvh] bg-cover bg-center bg-black relative">
        <img
          src={wallet}
          alt=""
          className=" w-full h-full object-cover object-center"
        />
        <div className="flex justify-between flex-col items-center gap-3 bg-black/60 h-[100dvh] overflow-scroll w-full p-5 absolute top-0 left-0 right-0 bottom-0">
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
              value={email}
              onChange={emailChangeHandler}
            />
            <p className=" w-full text-center text-red-500">{emailError}</p>
            <input
              type="text"
              placeholder="first name"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
              value={firstName}
              onChange={firstNameChangeHandler}
            />
            <p className=" w-full text-center text-red-500">{firstNameError}</p>

            <input
              type="text"
              placeholder="last name"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
              value={lastName}
              onChange={lastNameChangeHandler}
            />
            <p className=" w-full text-center text-red-500">{lastNameError}</p>
            <input
              type="password"
              placeholder="password"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
              value={password}
              onChange={passwordChangeHandler}
            />
            <p className=" w-full text-center text-red-500">{passwordError}</p>
            <input
              type="password"
              placeholder="confirm password"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
            />
            <p className=" w-full text-center text-red-500">
              {confirmPasswordError}
            </p>
          </div>
          <div className=" w-full flex flex-col gap-3 items-center">
            <p className=" text-red-500">{userSlice.error}</p>
            <button
              className=" text-white font-bold text-lg w-full h-[50px] rounded-md bg-green-400 "
              onClick={formSubmitHandler}
            >
              sign up
            </button>
            <p className=" text-white">
              already have an account?{" "}
              <Link
                to={"/login"}
                className=" text-green-400 font-bold underline"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SignUp;
