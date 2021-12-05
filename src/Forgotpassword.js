import React from "react";
import "./Forgotpassword.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function Forgotpassword() {
  const history = useHistory();
  return (
    <div className="forgot-container">
      <h1>Forgot your Password</h1>
      <div className="forgot-credentials">
        <TextField
          id="standard-basic"
          label="Enter Email Id"
          variant="standard"
        />
        <Button variant="contained">Request Reset Link</Button>
        <Button onClick={() => history.push("/")} variant="text">
          Back to Login
        </Button>
      </div>
    </div>
  );
}
