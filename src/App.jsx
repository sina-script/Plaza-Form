import React, { useState } from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./App.css";

function App() {
  const [formType, setFormType] = useState("login");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhoneNumber, setSignupPhoneNumber] = useState("");

  const changeToSignUp = () => {
    setFormType("signup");
  };

  const changeToLogIn = () => {
    setFormType("login");
  };

  return (
    <div className="main-wrapper">
      {formType === "login" ? (
        <Login
          changeToSignUp={changeToSignUp}
          loginUsername={loginUsername}
          setLoginUsername={setLoginUsername}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
        ></Login>
      ) : (
        <Signup
          changeToLogIn={changeToLogIn}
          signupUsername={signupUsername}
          setSignupUsername={setSignupUsername}
          signupPassword={signupPassword}
          setSignupPassword={setSignupPassword}
          signupEmail={signupEmail}
          setSignupEmail={setSignupEmail}
          signupPhoneNumber={signupPhoneNumber}
          setSignupPhoneNumber={setSignupPhoneNumber}
        ></Signup>
      )}
    </div>
  );
}

export default App;
