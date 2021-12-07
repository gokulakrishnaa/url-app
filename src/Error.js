import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function Error() {
  const history = useHistory();
  return (
    <div className="error">
      <h1>Wrong Credentials...Try Again</h1>
      <Button onClick={() => history.push("/")} variant="contained">
        OK
      </Button>
    </div>
  );
}
