/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import routingObj from './../../routing';
import { setSelectedUser } from './../redux/signInControllerSlice';
import { selectUserById } from './../redux/usersSlice';

const IfSignOutOrNotUserForwardBesideArena = () => {
  const userId = { useParams };
  const selectedUser = useSelector((state) => selectUserById(state, parseInt(userId)));

  const { dynamicRouting } = routingObj;

  const [user, setUser] = useState(selectedUser || null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedUser) {
      setSelectedUser(selectedUser);
      navigate(navigate, 'content-arena');
    }
  }, [selectedUser, navigate]);

  return <></>;
};

export default IfSignOutOrNotUserForwardBesideArena;
