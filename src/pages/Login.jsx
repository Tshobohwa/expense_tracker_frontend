import React, { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import wallet from "../../public/wallet-backgound.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSlice = useSelector((store) => store.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) return;
    setEmailError("Invalid email adress");
    setError(true);
  };

  const emailChangeHandler = (e) => {
    const text = e.target.value;
    setEmail(text);
  };

  const passwordChangeHandler = (e) => {
    const text = e.target.value;
    setPassword(text);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setError(false);
    validateEmail(email);

    if (email === "") {
      setEmailError("Email can not be empty");
      setError(true);
    }

    if (password === "") {
      setPasswordError("Password can not be empty");
      setError(true);
    }

    if (error) return;
    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  useEffect(() => {
    if (!userSlice.authenticated) return;
    navigate("/", { replace: true });
  }, [userSlice.authenticated]);

  return (
    <PageWrapper>
      <div className="w-[100vw] h-[100dvh] bg-cover bg-center bg-black relative">
        <img
          src={wallet}
          alt=""
          className=" w-full h-full object-cover object-center"
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
        <div className="flex justify-between flex-col items-center gap-3 bg-black/60 h-full w-full p-5 absolute top-0 left-0 right-0 bottom-0">
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
              type="password"
              placeholder="password"
              className=" w-full border border-green-100 h-[60px] text-lg bg-transparent rounded-md pl-6 text-white"
              value={password}
              onChange={passwordChangeHandler}
            />
            <p className=" w-full text-center text-red-500">{passwordError}</p>
          </div>
          <div className=" w-full flex flex-col gap-3 items-center">
            <button
              className=" text-white font-bold text-lg w-full h-[50px] rounded-md bg-green-400 "
              onClick={formSubmitHandler}
            >
              Login
            </button>
            <p className=" text-white">
              don't have an account?{" "}
              <Link
                to={"/signup"}
                className=" text-green-400 font-bold underline"
              >
                sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
