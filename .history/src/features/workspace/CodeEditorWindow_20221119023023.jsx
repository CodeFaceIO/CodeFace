import React, { useState } from 'react';
import styles from './workspace.module.css';
import Editor, { loader } from '@monaco-editor/react';
import ThemeDropDown from './ThemeDropDown';
import LanguagesDropDown from './LanguagesDropDown';
import { Button } from '@chakra-ui/react';
import files from './files';

const CodeEditorWindow = ({
  onChange,
  language,
  code,
  theme,
  handleCompile,
  processing,
  handleThemeChange,
  onSelectChange,
  themeEditorNav,
}) => {
  const jsonFile = files['configure.json']; // files is an object with all the files
  const [value, setValue] = useState(code || '');

  const handleEditorChange = (value) => {
    setValue(value);
    onChange('code', value);
  };

  return (
    <div className={`${styles.arena_work_workspace_ide}`}>
      <div
        className="d-flex p-2"
        style={{
          backgroundColor: '#0D1117',
        }}
      >
        <LanguagesDropDown onSelectChange={onSelectChange} />
        <ThemeDropDown handleThemeChange={handleThemeChange} themeEditorNav={themeEditorNav} />
        <Button onClick={handleCompile} disabled={!code} backgroundColor="#0053A6" variant="solid" width="400px" border="none">
          {processing ? 'Processing...' : 'Compile and Execute'}
        </Button>
      </div>
      <Editor
        language={language || 'javascript'}
        value={code || value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        options={JSON.parse(jsonFile.value)}
      />
    </div>
  );
};

export default CodeEditorWindow;
