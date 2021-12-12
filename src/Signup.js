import "./Signup.css";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    const newUser = {
      email,
      firstname,
      lastname,
      password,
    };

    fetch("https://nodeurlapp.herokuapp.com/loginusers/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/authenticate"));
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <div className="signup-credentials">
        <TextField
          value={email}
          onChange={(em) => setEmail(em.target.value)}
          id="standard-basic"
          label="Email Id"
          variant="standard"
        />
        <TextField
          value={firstname}
          onChange={(fname) => setFirstname(fname.target.value)}
          id="standard-basic"
          label="First Name"
          variant="standard"
        />
        <TextField
          value={lastname}
          onChange={(lname) => setLastname(lname.target.value)}
          id="standard-basic"
          label="Last Name"
          variant="standard"
        />
        <TextField
          value={password}
          onChange={(pass) => setPassword(pass.target.value)}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <Button onClick={addUser} variant="contained">
          Register User
        </Button>
        <Button onClick={() => history.push("/")} variant="text">
          Back
        </Button>
      </div>
    </div>
  );
}
