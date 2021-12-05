import React from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import Link from "@mui/material/Link";

export function Login() {
  const history = useHistory();
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-credentials">
        <TextField id="standard-basic" label="Email Id" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button variant="contained">Login</Button>
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
