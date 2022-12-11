/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import OutputWindow from './Consoled';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AiOutlineFileText, AiFillGithub, AiOutlineSearch } from 'react-icons/ai';
import {GrFormClose} from 'react-icons/gr';
import { useMouseDelta } from './hooks/useMouseDelta';
import { FaTimes, FaTerminal } from 'react-icons/fa';
import { VscExtensions } from 'react-icons/vsc';
import { CgCommunity, CgDockBottom } from 'react-icons/cg';
import { TbTemplate } from 'react-icons/tb';
import { RiTeamLine } from 'react-icons/ri';
import regexObject from './../../regex';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue
} from '@chakra-ui/react';
import {
  VscError,
  VscDebug,
  VscSearch,
  VscAccount,
  VscSettingsGear,
  VscFiles,
  VscGithubInverted,
  VscSourceControl,
  VscTerminalBash,
} from 'react-icons/vsc';
import { MdOutlineErrorOutline, MdSettings } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi';
import { BsLayoutSidebarInset, BsLayoutSidebar } from 'react-icons/bs';
import { TbSquareToggleHorizontal, TbSquareToggle } from 'react-icons/tb';
import TreeView from './TreeView';
import Terminal from './Terminal';

const ContentArena = ({ ref, handleThemeChange }) => {
  const sideMenus = [VscSearch, VscFiles, VscGithubInverted, VscSourceControl, VscExtensions, VscDebug];
  //Github State
  const { isOpen: isGithubOpen, onOpen: onGithubOpen, onClose: onGithubClose } = useDisclosure();
  const [githubUsername, setGithubUsername] = useState('');
  const [githubPassword, setGithubPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const isGithubLoginDisabled =
    (regexObject.emailDataTester(githubUsername) || githubUsername.length > 0) && regexObject.passwordDataTester(githubPassword);
    const githubModalBg = useColorModeValue('red.200',"#0b111b")


  const [code, setCode] = useState(files['script.js'].value);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('vs-dark');
  const [language, setLanguage] = useState(languageOptions[0]);
  const [sideBar, setSideBar] = useState(true);
  const [console, setConsole] = useState(true);

  const [isExplorer, setIsExploer] = useState(false);
  const [isTerminal, setIsTerminal] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isGithub, setIsGithub] = useState(false);
  const [isSourceControl, setIsSourceControl] = useState(false);
  const [isExtensions, setIsExtensions] = useState(false);
  const [isDebug, setIsDebug] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [isSettings, setIsSettings] = useState(false);
  const [jsonFile, setJsonFile] = useState(files['configure.json']); // files is an object with all the files
  const [githubRepos, setGithubRepos] = useState([]);
  const renderedSideMenus = sideMenus.map((Icon, index) => {
    return (
      <div
        className={styles.arena_work_workspace_nav_icon}
        key={index}
        onClick={() => {
          if (!isSearch) {
            setSideBar(!sideBar);
          }

          switch (index) {
            case 0:
              setIsSearch(!isSearch);
              break;
            case 1:
              setIsExploer(!isExplorer);
              break;
            case 2:
              setIsGithub(!isGithub);
              break;
            case 3:
              setIsSourceControl(!isSourceControl);
              onGithubOpen();
              break;
            case 4:
              setIsExtensions(!isExtensions);
              break;
            case 5:
              setIsDebug(!isDebug);
              break;
          }
        }}
      >
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
        // get error status\
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

  const uploadProjectToFileExplorerHandler = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        setJsonFile(fileContent);
      };
      reader.readAsText(file);
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
    defineTheme('vs-dark').then((_) => setTheme({ value: 'vs-dark', label: 'vs-dark' }));
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

  const appUserGithubRepoConnectionHandler = (githubToken) => {
    const options = {
      method: 'GET',
      url: 'https://api.github.com/user/repos',
      headers: {
        Authorization: 'token ' + githubToken,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const repos = response.data;
        setGithubRepos(repos);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log('status', status);
        if (status === 401) {
          console.log('unauthorized', status);
          setGithubRepos(null);
          showErrorToast(`Unauthorized! Please try again.`, 10000);
        }
        console.log('catch block...', error);
      });
  };

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
  const handleGithubLogin = () => {
    let allGithubUsers = [];
    
    if (githubRepos.find((user)=>(user.email===githubUsername)||(user.login===githubUsername))) {
      console.log('github login');
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <div
        className={`${
          sideBar && console
            ? styles.arena_container_main
            : sideBar
            ? styles.arena_container_main_3
            : console
            ? styles.arena_container_main_2
            : styles.arena_container_main_4
        }`}
      >
        <div className={`${styles.arena_maxtop} pe-3`}>
          <ul>
            <li>Logo</li>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
          <div className={`${styles.maxtop_input}`}>
            <input type="search" placeholder="Search in CodeFace" />
            <BiChevronDown />
          </div>
          <div>
            <ul className={`${styles.toggle_panel}`}>
              <li onClick={() => setSideBar(!sideBar)}>
                <TbSquareToggle />
              </li>
              <li onClick={() => setConsole(!console)}>
                <TbSquareToggleHorizontal />
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.arena_work_navi}`}>
          <WorkspaceNav />
        </div>
        <div className={`${styles.arena_col}`}>
          <div>{renderedSideMenus}</div>
          <div>
            <VscAccount />
            <VscSettingsGear />
          </div>
        </div>
        <div className={`${styles.arena_side}`}>
          {sideBar && <div className={`${styles.side_absolute}`}></div>}
          <div className={`${styles.arena_side_header}`}>
            <h1 className={`${styles.arena_side_header_text}`}></h1>
          </div>
          <TreeView />
        </div>
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
        <div className={`${styles.arena_console}`}>
          <div className={`${styles.console_absolute}`}></div>
          <div className={styles.console_controllers}>
            <FaTimes
              onClick={() => {
                setConsole(false);
              }}
            />
          </div>
          <Terminal />
        </div>
        <div className={`${styles.arena_status_bar}`}>
          <div className={`${styles.status_bar_errors}`}>
            <ul>
              <li>
                <VscError />
              </li>
              <li>
                <MdOutlineErrorOutline />
              </li>
            </ul>
          </div>
          <div className={`${styles.status_bar_line}`}></div>
          <div className={`${styles.status_bar_absolute}`}>
            {!console && (
              <VscTerminalBash
                onClick={() => {
                  setConsole(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
      <Modal  width={'300px'} isOpen={isGithubOpen} onClose={onGithubClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={githubModalBg} padding={'20px'}>
          {showError ? <div className={styles.errorMessage}>
            Username or password is incorrect
            <GrFormClose 
            onClick={()=>{setShowError(prev=>!prev)}}  className={styles.errorIcon}  />
            </div> : null}
          <div className={styles.githubModalHeader}>
            <VscGithubInverted className={styles.githubModalIcon} />
          </div>
          <ModalHeader mt={2} textAlign={'center'}>
            Login With Github
          </ModalHeader>
          <ModalCloseButton border={'none'} variant={'ghosty'} colorScheme="red" />
          <ModalBody padding={0}>
            <form onSubmit={handleGithubLogin} className={styles.githubModalForm} action={''}>
              <FormControl  id="email">
                <FormLabel mb={4}>Username or email adress</FormLabel>
                <Input
                  value={githubUsername}
                  onChange={(e) => {
                    setGithubUsername(e.target.value);
                  }}
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel mb={4} pt={6}>Password</FormLabel>
                <Input
                  value={githubPassword}
                  onChange={(e) => {
                    setGithubPassword(e.target.value);
                  }}
                  type="password"
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              disabled={!isGithubLoginDisabled}
              type="submit"
              colorScheme="green"
              border={'none'}
              width={'100%'}
              onClick={handleGithubLogin}
            >
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default React.memo(ContentArena);
