import "./Authenticate.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Authenticate() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const verifyUser = () => {
    const vUser = {
      email,
    };

    fetch("https://nodeurlapp.herokuapp.com/verifyuser/authenticate", {
      method: "POST",
      body: JSON.stringify(vUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  // fetch("https://nodeurlapp.herokuapp.com/verifyuser/activateuser/:token")

  return (
    <div className="authenticate-container">
      <h2>User Verification</h2>
      <div className="authenticate-credentials">
        <TextField
          value={email}
          onChange={(em) => setEmail(em.target.value)}
          id="standard-basic"
          label="Enter your Email Id"
          variant="standard"
        />
        <Button onClick={verifyUser} variant="contained">
          Send Email
        </Button>
        <Button onClick={() => history.push("/signup")} variant="text">
          Back
        </Button>
      </div>
    </div>
  );
}
