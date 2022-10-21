import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import regexObject from "./../../regex";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setPasswordError] = useState("");

  const navigate = useNavigate();

  const isDisabled =
    password.length >= 8 && regexObject.passwordDataTester(password);

  const handleRouting = (paramsUrl) => {
    navigate(paramsUrl);
  };

  const handleSubmit = (event) => {
    if (isDisabled) {
      //success password change code will be set here
      setTimeout(() => handleRouting("/login"), 1500);
    } else {
      setPasswordError("set valid password");
      setTimeout(() => setPasswordError(""), 3000);
    }
    event.preventDefault();
  };

  return (
    <div className={`${styles.reset_recover_container}`}>
      <form onSubmit={handleSubmit}>
        <h1>Password Reset</h1>
        <p className={`${styles.recover_p_content}`}>
          Create a new password that is at least 8 characters long. A strong
          password is combination of letters, numbers, and punctuation marks.
        </p>
        <div
          className={`${styles.form_input_container}  d-flex flex-column align-items-start`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder={error && error.length > 0 ? error : "Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={!isDisabled} type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
