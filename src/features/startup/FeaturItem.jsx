import React from "react";
import styles from "./code.module.css";

const FeaturItem = ({ item }) => {
  return (
    <div className={`${styles.features_item}`}>
      <h3>{item.header}</h3>
      <p>{item.content}</p>
      <div className="d-flex align-items-center">
        {/* <span>Read More</span> */}
        {item.icon}
      </div>
    </div>
  );
};

export default FeaturItem;
