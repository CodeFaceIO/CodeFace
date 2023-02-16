/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import routingObj from './../../routing';
import { setSelectedUser } from './../redux/signInControllerSlice';
import { selectUserById } from './../redux/usersSlice';

const IfSignOutOrNotUserForwardBesideArena = () => {
  const userId = { useParams };

  const selectedUser = useSelector(state => selectUserById(state, userId));

  const { dynamicRouting } = routingObj;
  const navigate = useNavigate();

  return <div></div>;
};

export default IfSignOutOrNotUserForwardBesideArena;