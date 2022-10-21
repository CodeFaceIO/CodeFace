import React from "react";
import styles from "./tutorials.module.css";
import { useNavigate } from "react-router-dom";

const MiniCourseItem = ({ course, setVisible, visible }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tutorials/detail");
  };

  return (
    <div className={`${styles.card_container}`}>
      <div className={`${styles.courses_item_content_mini}`}></div>
      <h3>Javascript Course for beginners (100 hours)</h3>

      <button onClick={handleClick} className={`${styles.go_to_course}`}>
        Go To Course
      </button>
    </div>
  );
};

export default MiniCourseItem;
