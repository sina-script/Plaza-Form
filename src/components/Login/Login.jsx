import React from "react";
import styles from "./Login.module.css";

function Login({changeToSignUp}) {
  return (
    <div className={styles.loginCard}>
      <div className={styles.heroSection}>
        <div className={styles.orbOne}></div>
        <div className={styles.orbTwo}></div>

        <div className={styles.heroTop}>
          <span className={styles.badge}>Welcome Back</span>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>YOUR HEADLINE NAME</h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className={styles.heroFooter}>Secure Platform &bull; v2.0</div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.formHeader}>
          <h2 className={styles.title}>Log In</h2>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                placeholder="Enter your username"
                className={styles.inputField}
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
                placeholder="Enter your password"
                className={`${styles.inputField} ${styles.passwordField}`}
              />
            </div>
          </div>


          <button type="button" className={styles.primaryBtn}>
            Log In
          </button>

        </div>

        <div className={styles.signupFooter}>
          Don't have an account?{" "}
          <a href="#signup" className={styles.signupLink} onClick={changeToSignUp}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
