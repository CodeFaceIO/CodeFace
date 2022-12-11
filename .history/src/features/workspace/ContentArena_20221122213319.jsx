/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { MdBuild } from 'react-icons/md';
import { Button } from '@chakra-ui/react';
import styles from './workspace.module.css';
import files from './files';
import WorkspaceNav from './WorkspaceNav';
import useKeyPress from './hooks/useKeyPress';
import { languageOptions } from './constants/languageOptions';
import { defineTheme } from './lib/defineTheme';
import CodeEditorWindow from './CodeEditorWindow';
import OutputWindow from './OutputWindow';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineFileText, AiFillGithub } from 'react-icons/ai';
import { VscSourceControl } from 'react-icons/vsc';



const sideMenus = [AiOutlineFileText, AiFillGithub, VscSourceControl];

const ContentArena = ({ ref, handleThemeChange }) => {
  const jsonFile = files['configure.json']; // files is an object with all the files
  const [code, setCode] = useState(files['script.js'].value);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('cobalt');
  const [language, setLanguage] = useState(languageOptions[0]);
  const [sideBar, setSideBar] = useState(true);

  const renderedSideMenus = sideMenus.map((Icon, index) => {
    return (
      <div className={styles.arena_work_workspace_nav_icon} key={index} onClick={() => setSideBar(!sideBar)}>
        <Icon />
      </div>
    );
  });

  const enterPress = useKeyPress('Enter');
  const ctrlPress = useKeyPress('Control');

  const onSelectChange = (sl) => {
    console.log('selected Option...', sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress);
      console.log('ctrlPress', ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: 'POST',
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const token = response.data;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log('status', status);
        if (status === 429) {
          console.log('too many requests', status);

          showErrorToast(`Quota of 100 requests exceeded for the Day!`, 10000);
        }
        setProcessing(false);
        console.log('catch block...', error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: process.env.REACT_APP_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log('response.data', response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log('theme...', theme);

    if (['light', 'vs-dark'].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }

  useEffect(() => {
    defineTheme('blackboard').then((_) => setTheme({ value: 'blackboard', label: 'Blackboard' }));
    // keep url state before refresh with handleWorkspaceComponentClick prop
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: 'top-right',
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // react-monaco editor config

  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };

  return (
    <>
      <div className={`${sideBar ? styles.arena_container_main : styles.arena_container_main_2}`}>
        <div className={styles.arena_maxtop}></div>
        <div className={`${styles.arena_work_navi}`}>
          <WorkspaceNav />
        </div>
        <div className={`${styles.arena_col}`}>{renderedSideMenus}</div>
        <div className={`${styles.arena_side}`}></div>
        <CodeEditorWindow
          code={code}
          onChange={onChange}
          language={language?.value}
          theme={theme.value}
          outputDetails={outputDetails}
          handleCompile={handleCompile}
          processing={processing}
          handleThemeChange={handleThemeChange}
          onSelectChange={onSelectChange}
          themeEditorNav={theme}
        />
        <div className={`${styles.arena_status_bar}`}></div>
      </div>
    </>
  );
};

export default ContentArena;
