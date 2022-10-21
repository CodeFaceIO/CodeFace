import React from 'react';
import WorkspaceNav from './WorkspaceNav';
import styles from './z.module.css';
import Editor from '@monaco-editor/react';
import files from './files';
import { FaCopy } from 'react-icons/fa';
const ContentUITools = () => {



  const DynamicCreatibleComponent = {
    
  }


  const component = files['ComponentName.js'];

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
            <FaCopy title="Copy" />
            <Editor
              defaultLanguage={component.language}
              defaultValue={component.value}
              theme="vs-dark"
              options={{
                glyphMargin: true,
                lineNumbers: 'on',
                lineNumbersMinChars: 3,
              }}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContentUITools;
