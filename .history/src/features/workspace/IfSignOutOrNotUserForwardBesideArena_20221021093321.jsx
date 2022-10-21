/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import routingObj from './../../routing';
import { setSelectedUser } from './../redux/signInControllerSlice';
import { selectUserById } from './../redux/usersSlice';

const IfSignOutOrNotUserForwardBesideArena = () => {
  const userId = { useParams };

  const selectedUser = useSelector(state => selectUserById(state, parseInt(userId)));

  const { dynamicRouting } = routingObj;

  const navigate = useNavigate();




  useEffect(() => {

    if (selectedUser) {
      setSelectedUser(selectedUser);
      navigate(navigate,'content-arena');
    }
    
  },[]);


  return <div></div>;
};

export default IfSignOutOrNotUserForwardBesideArena;
