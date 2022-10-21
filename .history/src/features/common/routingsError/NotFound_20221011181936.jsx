import React, { useEffect } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import routingObject from './../../../routing';

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = (paramsUrl) => {
    navigate(paramsUrl);
  };

  const { dynamicRouting } = routingObject;

  useEffect(() => setTimeout(() => navigate('/'), 4000), [navigate]);

  return (
    <Box textAlign="center" py={10} px={6} height="100vh">
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
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
        onClick={() => {
          handleClick('/');
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
