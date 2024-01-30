import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [responseError, setResponseError] = useState();

  console.log("responseError", responseError);
  const isLogin = params.get("isLogin");
  const authLink = isLogin ? "" : "?isLogin=1";

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setResponseError();
    console.log("submitHandler inputs", inputs);
    const url = `http://localhost:8080/${isLogin ? "login" : "signup"}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    console.log("response", response);
    const data = await response.json();
    console.log("data", data);

    if (!response.ok) {
      setResponseError(data);
      return;
    }

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("token", data.token);
    localStorage.setItem("tokenExpiration", expiration.toISOString());

    navigate("/events");
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {responseError?.errors && (
          <ul>
            {Object.values(responseError.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {responseError?.message && <p>{responseError.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={inputs.email}
            onChange={inputHandler}
          />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            value={inputs.password}
            onChange={inputHandler}
          />
        </p>
        <div className={classes.actions}>
          <Link to={authLink} type="button">
            {isLogin
              ? "No account? Register"
              : "Already have an account? Login"}
          </Link>
          <button>{isLogin ? "Login" : "Register"}</button>
        </div>
      </form>
    </>
  );
};

export default AuthForm;
