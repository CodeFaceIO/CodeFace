import React from "react";
import DocsFooter from "./DocsFooter";
import styles from "./docs.module.css";
import DocsSearchContainer from "./DocsSearchContainer";
import DocsMainView from "./DocsMainView";

const bodyLinks = [
  { id: 1, title: "Badge" },
  { id: 2, title: "IDE" },
  { id: 3, title: "Arena" },
  { id: 4, title: "Snippets" },
  { id: 5, title: "Workspace" },
  { id: 6, title: "MagicBox" },
  { id: 7, title: "Tutorials" },
  { id: 8, title: "Instructor" },
  { id: 9, title: "Suggestions" }
];
const DocsContent = ({ docName }) => {
  const renderedLinks = bodyLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href="#">{link.title}</a>
      </li>
    );
  });
  
  return (
    <div className={`${styles.grid_frame_side}`}>
      <DocsSearchContainer />
      <div className={`${styles.frame_after_search_header}`}>
        <h2>CodeFace Docs</h2>
        <p>Consider the detailed documentation as your friend</p>
      </div>
      <div className={`${styles.content_texts_footer_container}`}>
        <div className={`${styles.content_texts_footer_container_body}`}>
          <DocsMainView docName={docName} />
        </div>
        <DocsFooter />
      </div>
    </div>
  );
};

export default DocsContent;
