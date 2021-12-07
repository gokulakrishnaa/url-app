import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import Link from "@mui/material/Link";
import { useState } from "react";

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = () => {
    const credentials = {
      email,
      password,
    };

    fetch("https://nodeurlapp.herokuapp.com/loginusers/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Login Successful") {
          history.push("/home");
        } else {
          history.push("/error");
        }
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-credentials">
        <TextField
          value={email}
          onChange={(em) => setEmail(em.target.value)}
          id="standard-basic"
          label="Email Id"
          variant="standard"
        />
        <TextField
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <Button onClick={loginUser} variant="contained">
          Login
        </Button>
      </div>
      <div className="login-forgot">
        <Link href="/forgotpassword" underline="none">
          Forgot Password ?
        </Link>
      </div>
      <div className="new-user">
        <p>New User ?</p>
        <Button onClick={() => history.push("/signup")} variant="text">
          Sign up
        </Button>
      </div>
    </div>
  );
}
