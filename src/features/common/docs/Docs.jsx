import React, { useState } from "react";
import DocsNavigation from "./DocsNavigation";
import DocsContent from "./DocsContent";
import styles from "./docs.module.css";

const Docs = () => {
  const [docName, setDocName] = useState("");
  
  return (
    <div className={`${styles.docs_container_styles_grid}`}>
      <DocsNavigation setDocName={setDocName} />
      <DocsContent docName={docName} />
    </div>
  );
};

export default Docs;
