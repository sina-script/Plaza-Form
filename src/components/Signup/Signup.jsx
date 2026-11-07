import React from "react";
import styles from "./Signup.module.css";

function Signup({
  changeToLogIn,
  signupUsername,
  setSignupUsername,
  signupPassword,
  setSignupPassword,
  signupEmail,
  setSignupEmail,
  signupPhoneNumber,
  setSignupPhoneNumber,
}) {



  
  const signupValidate=()=>{
    if(signupUsername.length<8)
    {
      alert("Your username length is shorter than 8 characters!")
    }
    else if(signupPassword.length<8)
    {
      alert("Your password length is shorter than 8 characters!")
    }
    else if(signupEmail.length<10)
    {
      alert("Your email length is shorter than 8 characters!")
    }
    else{
      alert("You have successfully signed up.")
      setSignupUsername("")
      setSignupPassword("")
      setSignupPhoneNumber("")
      setSignupEmail("")
    }
  }

  return (
    <div className={styles.signupCard}>
      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>
            Join us today! Enter your details below.
          </p>
        </div>

        <div className={styles.formFields}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Username</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Create a username"
                className={styles.inputField}
                value={signupUsername}
                onChange={(event) => {
                  setSignupUsername(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Create a strong password"
                className={`${styles.inputField} ${styles.passwordField}`}
                value={signupPassword}
                onChange={(event) => {
                  setSignupPassword(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.inputField}
                value={signupEmail}
                onChange={(event) => {
                  setSignupEmail(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone Number</label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className={styles.inputField}
                value={signupPhoneNumber}
                onChange={(event) => {
                  setSignupPhoneNumber(event.target.value);
                }}
              />
            </div>
          </div>

          <button type="button" className={styles.primaryBtn}>
            Sign Up
          </button>
        </div>

        <div className={styles.loginFooter}>
          Already have an account?{" "}
          <a href="#login" className={styles.loginLink} onClick={changeToLogIn}>
            Log In
          </a>
        </div>
      </div>

      <div className={styles.heroSection}>
        <div className={styles.orbOne}></div>
        <div className={styles.orbTwo}></div>

        <div className={styles.heroTop}>
          <span className={styles.badge}>Get Started</span>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>JOIN US TODAY</h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className={styles.heroFooter}>Secure Platform &bull; v2.0</div>
      </div>
    </div>
  );
}

export default Signup;
