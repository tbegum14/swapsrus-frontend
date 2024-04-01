import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import { auth } from "../config/firebase-config";
import "../styles/register.css";

function Register() {
  const initialState = {
    email: "",
    password: "",
  };

  const [fields, setFields] = useState(initialState);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    createUserWithEmailAndPassword(auth, fields.email, fields.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log("Account Created");
        setAlert({
          message: "Your account has been created!",
          isSuccess: true,
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        setAlert({ message: errorMessage, isSuccess: false });
        setFields(initialState);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={fields.password}
          onChange={handleFieldChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
}

export default Register;
