import "./ActivateUser.css";
import React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function ActivateUser() {
  const history = useHistory();
  // eslint-disable-next-line
  const { token } = useParams();
  return (
    <div className="activate-container">
      <h1>Account Activation</h1>
      <div className="activate-credentials">
        <p>Your Account got Activated, Login to continue to the application</p>
        <Button onClick={() => history.push("/")} variant="text">
          Back
        </Button>
      </div>
    </div>
  );
}
