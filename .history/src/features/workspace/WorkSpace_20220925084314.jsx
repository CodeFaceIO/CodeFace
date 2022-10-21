import React, { useEffect, useState, useRef, createContext, useHistory } from 'react';
import SimpleSideBar from './SimpleSideBar';
import Nav from './Nav';
import Content from './Content';
import ContentArena from './ContentArena';
import ContentDashboard from './ContentDashboad';
import ContentLeaderBoard from './ContentLeaderBoard';
import ContentRandomCode from './ContentRandomCode';
import ContentTaskbar from './ContentTaskbar';
import ContentUITools from './ContentUITools';
import routingObject from './../../routing';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { useNavigate } from 'react-router-dom';

import styles from './workspace.module.css';
import WorkspaceDataFillForm from './WokspaceDataFillForm';

export const RouteContext = createContext(''); //

const WorkSpace = () => {
  const [max, setMax] = useState(false);
  const [url, setURL] = useState('');
  const [theme, setTheme] = useState('');
  // const [route,setRoute]  =useState({
  //   to:location.pathname,
  //   from:location.pathname
  // })

  useEffect(() => {}, []);
  const contextValue = url;

  const ComponentRef = useRef(null);

  const navigate = useNavigate();
  const { backward } = routingObject;

  const handleWorkspaceComponentClick = (paramsContent) => {
    setURL(paramsContent);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    setURL(url);
  }, [url]);

  return (
    <div className={`${!max ? styles.grid_container : styles.grid_container_sm}`}>
      <SimpleSideBar max={max} setMax={setMax} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      <Nav />

      {url === 'Dashboard' ? (
        <ContentDashboard ref={ComponentRef} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      ) : url === 'UI Tools' ? (
        <ContentUITools ref={ComponentRef} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      ) : url === 'Taskbar' ? (
        <ContentTaskbar ref={ComponentRef} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      ) : url === 'Leader-board' ? (
        <ContentLeaderBoard ref={ComponentRef} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      ) : url === 'Code explanation' ? (
        <ContentRandomCode ref={ComponentRef} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      ) : url === 'Arena' ? (
        <ContentArena
          ref={ComponentRef}
          handleWorkspaceComponentClick={handleWorkspaceComponentClick}
          handleThemeChange={handleThemeChange}
          url={url}
        />
      ) : url === 'codefacedatafillform' ? (
        <WorkspaceDataFillForm ref={ComponentRef} setUrl={setURL} to={` /${url}`} />
      ) : (
        <Content ref={ComponentRef} handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      )}
    </div>
  );
};

export default WorkSpace;
