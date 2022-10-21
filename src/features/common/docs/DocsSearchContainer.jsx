import React from "react";
import styles from "./docs.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import routingObject from "./../../../routing";

const DocsSearchContainer = () => {
  const navigate = useNavigate();

  const { backward, dynamicRouting } = routingObject;

  return (
    <div className={`${styles.docs_algolia_search}`}>
      <div>
        <button
          className={`${styles.home_page_button}`}
          onClick={() => backward(navigate)}
        >
          Back
        </button>
        <button
          className={`${styles.home_page_button}`}
          onClick={() => dynamicRouting(navigate, "/")}
        >
          Home
        </button>
      </div>
      <button className={`${styles.algolia_search_button}`}>
        <div>
          <AiOutlineSearch />
          <span>Search the documentation</span>
        </div>
        <div className={`${styles.ctrl_k}`}>
          <code>Ctrl</code>
          <code>K</code>
        </div>
      </button>
    </div>
  );
};

export default DocsSearchContainer;
