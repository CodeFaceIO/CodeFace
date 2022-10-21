import React from 'react';
import WorkspaceNav from './WorkspaceNav';
import styles from './z.module.css';
import editor from '@monaco-editor/react';
const ContentUITools = ({}) => {
  return (
    <div>
      <WorkspaceNav />
      <div className={`${styles.random_code_container_board}`}>
        <div>
          <h1 className={`${styles.react_cms_header}`}>React UI Builder</h1>
        </div>
        <div className={`${styles.ui_output_output_tools}`}>
          <div></div>
          <div>
          <editor

            defaultLanguage="javascript"
            defaultValue="// some code"
          />


          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContentUITools;
