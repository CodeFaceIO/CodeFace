import React from "react";
import StartUpNavigation from "../../startup/StartUpNavigation";
import styles from "./explore.module.css";

const Explore = () => {
  return (
    <div className={`${styles.bg_explore}`}>
      <StartUpNavigation />
    </div>
  );
};

export default Explore;
