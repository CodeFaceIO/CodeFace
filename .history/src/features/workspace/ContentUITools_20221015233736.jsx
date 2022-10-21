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
                fontSize: 18,
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                autoIndent: 'full',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                folding: true,
                lineNumbers: 'on',
                lineNumbersMinChars: 3,
                scrollbar: {
                  vertical: 'visible',
                  horizontal: 'visible',
                  useShadows: false,
                  verticalScrollbarSize: 10,
                  horizontalScrollbarSize: 10,
                  verticalHasArrows: false,
                  horizontalHasArrows: false,
                  arrowSize: 30
                },
                glyphMargin: true,
                fixedOverflowWidgets: true
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
