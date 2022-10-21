/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallWithLogoLeft from '../common/Footer/SmallWithLogoLeft';
import StartUpNavigation from '../startup/StartUpNavigation';
import styles from './form.module.css';
import { BsGithub } from 'react-icons/bs';
import regexObject from './../../regex';
import GitHubLogin from 'react-github-login';

const SignUp = ({ navLight }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
  });

  const isDisabled = [password, email].every(Boolean) && password.length >= 8;

  const handleRouting = (paramsUrl) => {
    navigate(paramsUrl);
  };

  const handleSubmit = (event) => {
    if (isDisabled) {
      if (regexObject.emailDataTester(email) && regexObject.passwordDataTester(password)) {
        //success registration
      } else {
        if (!regexObject.emailDataTester(email) && !regexObject.passwordDataTester(password)) {
          setError((pre) => {
            let copyObj = { ...pre };
            copyObj.emailError = 'set valid email';
            copyObj.passwordError = 'set valid password';
            return copyObj;
          });
        } else if (!regexObject.emailDataTester(email)) {
          setError((pre) => {
            let copyObj = { ...pre };
            copyObj.emailError = 'set valid email';
            copyObj.passwordError = '';
            return copyObj;
          });
        } else {
          setError((pre) => {
            let copyObj = { ...pre };
            copyObj.passwordError = 'set valid password';
            copyObj.emailError = '';
            return copyObj;
          });
          setButtonText('field values');
          setTimeout(() => setButtonText(''), 3000);
        }
      }
    }

    setEmail('');
    setPassword('');
    event.preventDefault();
  };

  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.error(response);

  return (
    <div>
      <StartUpNavigation navLight={navLight} />
      <div className={`${styles.signin_signup_container}`}>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>
            Welcome to <span>CodeFace</span>
          </p>
          <div className={`${styles.form_input_container}  d-flex flex-column align-items-start`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={error.emailError && error.emailError.length > 0 ? error.emailError : 'Email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.form_input_container}  d-flex flex-column align-items-start`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder={error.passwordError && error.passwordError.length > 0 ? error.passwordError : 'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small>
              Your password must be 8 or more characters long and contain a mix upper & lower case letters, number ans
              symbol
            </small>
          </div>

          <button disabled={!isDisabled} type={'submit'}>
            {buttonText && buttonText.length > 0 ? buttonText : 'LOGIN'}
          </button>
          <GitHubLogin clientId="1d305b99e64506c344f1" onSuccess={onSuccess} onFailure={onFailure}>
            <button className={`${styles.github_button}`}>
              <BsGithub />
            </button>
          </GitHubLogin>

          <p className={`${styles.reset_password}`}>
            Forgot Password?
            <span onClick={() => handleRouting('/reset')} style={{ marginLeft: '10px', cursor: 'pointer' }}>
              Reset Password
            </span>
          </p>
          <p>
            Not have an account?
            <span onClick={() => handleRouting('/register')} style={{ marginLeft: '10px', cursor: 'pointer' }}>
              REGISTER
            </span>
          </p>
        </form>
      </div>
      <SmallWithLogoLeft />
    </div>
  );
};

export default SignUp;
