import React from "react";
import "./Forgotpassword.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Forgotpassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const verifyUser = () => {
    const vUser = {
      email,
    };

    fetch("https://nodeurlapp.herokuapp.com/fpass/forgot-password", {
      method: "POST",
      body: JSON.stringify(vUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/"));
  };

  return (
    <div className="forgot-container">
      <h1>Forgot your Password</h1>
      <div className="forgot-credentials">
        <TextField
          value={email}
          onChange={(em) => setEmail(em.target.value)}
          id="standard-basic"
          label="Enter Email Id"
          variant="standard"
        />
        <Button onClick={verifyUser} variant="contained">
          Request Reset Link
        </Button>
        <Button onClick={() => history.push("/")} variant="text">
          Back to Login
        </Button>
      </div>
    </div>
  );
}
