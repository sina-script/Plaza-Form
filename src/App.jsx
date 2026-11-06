import React, { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";

function App() {
  const [formType, setFormType] = useState("login");

  const changeToSignUp = () => {
    setFormType("signup");
  };

  const changeToLogIn = () => {
    setFormType("login");
  };

  return (
    <div className="main-wrapper">
      {formType === "login" ? <Login changeToSignUp={changeToSignUp}></Login> : <Signup changeToLogIn={changeToLogIn}></Signup>}
    </div>
  );
}

export default App;
