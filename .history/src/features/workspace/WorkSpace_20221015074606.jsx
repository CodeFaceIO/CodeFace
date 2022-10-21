import React, { useEffect, useState, useRef, createContext, useHistory } from 'react';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { useNavigate, Outlet, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Content from './Content';
import ContentArena from './ContentArena';
import ContentDashboard from './ContentDashboard';
import ContentLeaderBoard from './ContentLeaderBoard';
import ContentRandomCode from './ContentRandomCode';
import ContentTaskbar from './ContentTaskbar';
import ContentUITools from './ContentUITools';
import WorkspaceDataFillForm from './WorkspaceDataFillForm';
import routingObject from './../../routing';
import styles from './workspace.module.css';

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
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="workspace-data-fill-form" element={<WorkspaceDataFillForm />} />
        <Route path="content-ui-tools" element={<ContentUITools />} />
        <Route path="content-dashboard" element={<ContentDashboard />} />
        <Route path="content-taskbar" element={<ContentTaskbar />} />
        <Route path="content-leaderboard" element={<ContentLeaderBoard />} />
        <Route path="content-random-code" element={<ContentRandomCode />} />
        <Route path="content-arena" element={<ContentArena />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default WorkSpace;
