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
    <Box textAlign="center" py={10} px={6} height="100vh">
      <Heading display="inline-block" as="h2" size="2xl" bgGradient="linear(to-r, teal.400, teal.600)" backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
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
