import React from "react";
import styles from "./docs.module.css";

const DocsMainView = ({ docName }) => {
  const message =
    docName && docName.length > 0
      ? `Doc's of ${docName}`
      : "For more information, please select a topic from the left menu";
  
  return (
    <div className={`${styles.docs_main}`}>
      <div className={`${styles.docs_main_head}`}>
        <div className={`${styles.docs_main_head_dots_red}`}></div>
        <div className={`${styles.docs_main_head_dots_green}`}></div>
        <div className={`${styles.docs_main_head_dots_yellow}`}></div>
      </div>
      <div className={`${styles.docs_main_body}`}>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default DocsMainView;
