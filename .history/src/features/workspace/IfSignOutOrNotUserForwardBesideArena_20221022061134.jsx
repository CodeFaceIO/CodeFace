/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setSelectedUser } from './../redux/signInControllerSlice';
import { selectUserById } from './../redux/usersSlice';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import routingObject from './../../routing';


const IfSignOutOrNotUserForwardBesideArena = () => {
  const userId = { useParams };
  const selectedUser = useSelector((state) => selectUserById(state, parseInt(userId)));

  const { dynamicRouting } = routingObj;

  const [user, setUser] = useState(selectedUser || null);

  const navigate = useNavigate();
  const dispatch = useDispatch();



  return(
   <>
    <h1>Not enabled arena is disabled please complete setup</h1>
    </>
  )


}

export default IfSignOutOrNotUserForwardBesideArena;
