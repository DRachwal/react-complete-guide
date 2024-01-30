import { redirect } from "react-router-dom";

export const getAuthToken = () => localStorage.getItem("token");

export const isAuthLoader = () => {
  const token = getAuthToken();

  if (!token) return redirect("/auth?isLogin=1");

  return null;
};

export const getAuthTokenDuration = () => {
  const tokenExpiration = localStorage.getItem("tokenExpiration");
  const timeout = new Date(tokenExpiration) - new Date();

  return timeout;
};
