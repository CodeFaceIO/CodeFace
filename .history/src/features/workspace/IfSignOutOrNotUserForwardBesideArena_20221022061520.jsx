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

  const { dynamicRouting } = routingObject;

  const [user, setUser] = useState(selectedUser || null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box textAlign="center" py={10} px={6} height="100vh" border="1px solid #383d47">
      <Heading display="inline-block" as="h2" size="2xl" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
      OOOPS!
      </Heading>
      <Text fontSize="22px" mt={3} mb={2}>
      Arena is disabled
      </Text>
      <Text color="#383d47" mb={6}>
        For enable Arena, please sign in or sign up <br /> after that you must complete profile setup then you can access to Arena.
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={() => dynamicRouting(navigate, '/')}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default IfSignOutOrNotUserForwardBesideArena;
