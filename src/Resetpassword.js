import React from "react";
import "./Resetpassword.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Resetpassword() {
  const history = useHistory();
  const [newPass, setNewPass] = useState("");

  const newPassword = () => {
    const nPass = {
      newPass,
    };

    fetch("https://nodeurlapp.herokuapp.com/fpass/reset-password/:id/:token", {
      method: "POST",
      body: JSON.stringify(nPass),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/"));
  };

  return (
    <div className="reset-container">
      <h1>Password Reset</h1>
      <div className="reset-credentials">
        <TextField
          value={newPass}
          onChange={(em) => setNewPass(em.target.value)}
          id="standard-basic"
          label="Enter new password"
          variant="standard"
        />
        <Button onClick={newPassword} variant="contained">
          Reset Password
        </Button>
        <Button onClick={() => history.push("/")} variant="text">
          Back
        </Button>
      </div>
    </div>
  );
}
