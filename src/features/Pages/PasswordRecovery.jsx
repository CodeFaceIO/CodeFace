/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;
  const navigate = useNavigate();

  const isDisabled = email.length >= 0 && emailRegex.test(email);

  const handleNavigate = (e) => {
    if (isDisabled) {
      alert("Password reset link has been sent to your email");
      navigate("/recover");
    }

    e.preventDefault();
  };

  return (
    <div className={`${styles.reset_recover_container}`}>
      <form onSubmit={handleNavigate}>
        <h1>Forgot your password? </h1>
        <p>
          You'll get an email with a reset <span>Link</span>
        </p>
        <div
          className={`${styles.form_input_container}  d-flex flex-column align-items-start`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yourexample@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button disabled={!isDisabled}>Request password</button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
