import React, { useEffect, useState, useRef, createContext, useHistory } from 'react';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { Outlet, Routes, Route } from 'react-router-dom';
import Content from './Content';
import ContentArena from './ContentArena';
import ContentDashboad from './ContentDashboad';
import ContentLeaderBoard from './ContentLeaderBoard';
import ContentRandomCode from './ContentRandomCode';
import ContentTaskbar from './ContentTaskbar';
import ContentUITools from './ContentUITools';
import WokspaceDataFillForm from './WokspaceDataFillForm';
import routingObject from './../../routing';
import styles from './workspace.module.css';

export const RouteContext = createContext(''); //

const WorkSpace = () => {
  const [max, setMax] = useState(false);

  return (
    <div className={`${!max ? styles.grid_container : styles.grid_container_sm}`}>

        <Route path="" element={<Content />} />
        <Route path="workspace-data-fill-form" element={<WokspaceDataFillForm />} />
        <Route path="content-ui-tools" element={<ContentUITools />} />
        <Route path="content-dashboard" element={<ContentDashboad />} />
        <Route path="content-taskbar" element={<ContentTaskbar />} />
        <Route path="content-leaderboard" element={<ContentLeaderBoard />} />
        <Route path="content-random-code" element={<ContentRandomCode />} />
        <Route path="content-arena" element={<ContentArena />} />

      <Outlet />
    </div>
  );
};

export default WorkSpace;
