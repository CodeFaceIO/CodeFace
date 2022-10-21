import React from 'react';
import WorkspaceNav from './WorkspaceNav';
import styles from './z.module.css';
const ContentUITools = ({ ref, handleWorkspaceComponentClick }) => {
  return (
    <div>
      <WorkspaceNav handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      <div className={`${styles.random_code_container_board}`}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ContentUITools;
