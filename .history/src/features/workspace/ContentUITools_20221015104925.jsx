import React from 'react';
import WorkspaceNav from './WorkspaceNav';
import styles from './z.module.css';
const ContentUITools = ({}) => {
  return (
    <div>
      <WorkspaceNav />
      <div className={`${styles.random_code_container_board}`}>
        <div>
          <h1 className>React UI Builder</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ContentUITools;
