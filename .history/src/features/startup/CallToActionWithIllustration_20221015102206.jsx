/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./code.module.css";
import StartUpNavigation from "./StartUpNavigation";
import logo from "./../assets/svg/1.svg";
import { useNavigate } from "react-router-dom";

const CallToActionWithIllustration = ({ navLight }) => {
  const navigate = useNavigate();

  const handleRouting = (paramsRoute) => {
    navigate(paramsRoute);
  };

  return (
    <div className={`${styles.header_class}`}>
      <StartUpNavigation navLight={navLight} />
      <div className="d-flex justify-content-between align-items-center">
        <div className={`${styles.header_head_container}`}>
          <h1>Code wars begin with a new level 2022!</h1>
          <button onClick={() => handleRouting("/more/articles")}>
            Learn more -
            <img src={logo} alt="codeface logo" width="60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionWithIllustration;
