/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routingObj from './../../routing';
import {setSelec}

const IfSignOutOrNotUserForwardBesideArena = () => {
  const userId = { useParams };

  const { dynamicRouting } = routingObj;
  const navigate = useNavigate();

  return <div></div>;
};

export default IfSignOutOrNotUserForwardBesideArena;
