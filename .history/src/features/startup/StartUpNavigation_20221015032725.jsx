import React from "react";
import styles from "./code.module.css";
import logo from "./../assets/svg/1.svg";
import { useNavigate } from "react-router-dom";
import routingObject from "./../../routing.js";

export const StartUpNavigation = ({ navLight }) => {
  const navigate = useNavigate();
  
  const { dynamicRouting } = routingObject;
  
  const handleRouting = (paramsRoute) => {
    navigate(paramsRoute);
  };
  
  return (
    <div
      className={`${
        
        !navLight
          ? styles.navigation_main_container
          : styles.navigation_main_container_light
      }`}
    >
      <img src={logo} alt="" onClick={() => handleRouting("/")} />
      <div>
        <p onClick={() => dynamicRouting(navigate, "tutorials")}>TUTORIALS</p>
        <p onClick={() => dynamicRouting(navigate, "/workspace")}>ARENA</p>
        <p onClick={() => dynamicRouting(navigate, "/documentation")}>DOCS</p>
        <button onClick={() => dynamicRouting(navigate, "/register")}>
          Start journey - IT'S FREE
        </button>
      </div>
    </div>
  );
};

export default StartUpNavigation;
