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

      <Outlet />
    </div>
  );
};

export default WorkSpace;
