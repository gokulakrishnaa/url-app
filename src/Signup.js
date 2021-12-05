import "./Signup.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function Signup() {
  const history = useHistory();
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <div className="signup-credentials">
        <TextField
          id="standard-basic"
          label="Enter Email Id"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Enter First Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Enter Last Name"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Enter Password"
          variant="standard"
        />
        <Button variant="contained">Register User</Button>
        <Button onClick={() => history.push("/")} variant="text">
          Back
        </Button>
      </div>
    </div>
  );
}
