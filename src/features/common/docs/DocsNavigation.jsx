import React from "react";
import styles from "./docs.module.css";

const features = [
  { id: 1, title: "Badge", content: "" },
  { id: 2, title: "IDE", content: "" },
  { id: 3, title: "Arena", content: "" },
  { id: 4, title: "Snippets", content: "" },
  { id: 5, title: "Workspace", content: "" },
  { id: 6, title: "MagicBox", content: "" },
  { id: 7, title: "Tutorials", content: "" },
  { id: 8, title: "Instructor", content: "" },
  { id: 9, title: "Suggestions", content: "" }
];

const DocsNavigation = ({ setDocName }) => {
  const renderedFeatures = features.map((feature) => {
    return (
      <li key={feature.id} onClick={() => setDocName(feature.title)}>
        <span>{feature.title} </span>
      </li>
    );
  });
  
  return (
    <div className={`${styles.grid_navigation_side}`}>
      <div className={`${styles.navigation_fixed_content_container}`}>
        <div>
          <h2>Documentation</h2>
        </div>
        
        <ul>{renderedFeatures}</ul>
      </div>
    </div>
  );
};

export default DocsNavigation;
