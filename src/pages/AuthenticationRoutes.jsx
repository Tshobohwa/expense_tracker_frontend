import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import React from "react";

const AuthenticationRoutes = () => {
  const user = useSelector((store) => store.user);
  return !user.authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default AuthenticationRoutes;
