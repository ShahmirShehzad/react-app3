import { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const login = () => {
    sessionStorage.setItem("login", true);
    navigate("/");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <>
      <h1>Login</h1>
      <br />
      <input type="text" placeholder="Enter username" />
      <br />
      <input type="text" placeholder="Enter password" />
      <br />
      <button onClick={login}>Login</button>
    </>
  );
}

export default Login;
