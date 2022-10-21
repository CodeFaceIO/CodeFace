import React from "react";
import StartUpNavigation from "../../startup/StartUpNavigation";
import styles from "./leader.module.css";

const LeaderBoard = () => {
  return (
    <div>
      <StartUpNavigation />
      <div className={`${styles.leader_container}`}>
        {/* <h1 className={`${styles.code_header_center}`}>CodeFace Leaderboard</h1> */}
      </div>
    </div>
  );
};

export default LeaderBoard;
