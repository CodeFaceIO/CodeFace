<<<<<<< Updated upstream:.history/src/root/App_20221120190154.jsx
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Dashboard from './Dashboard';

const chakraUIThemes = {
  light: {
    colors: {
      primary: '#0A0A0A',
      secondary: '#F5F5F5',
      tertiary: '#F5F5F5',
      quaternary: '#FFFFFF',
      quinary: '#F5F5F5',
      senary: '#0A0A0A',
    },
  },
  dark: {
    colors: {
      primary: '#F5F5F5',
      secondary: '#0A0A0A',
      tertiary: '#0A0A0A',
      quaternary: '#0A0A0A',
      quinary: '#0A0A0A',
      senary: '#F5F5F5',
    },
  },
};

export const ChakraContext = createContext(chakraUIThemes);

const App = () => {
  const value = chakraUIThemes.light;
  return (
    // <ChakraContext.Provider value={value}>
    //   <ChakraProvider>
    //     <ColorModeProvider>
    //       <Dashboard />
    //     </ColorModeProvider>
    //   </ChakraProvider>
    // </ChakraContext.Provider>
  );
};

export default App;
=======
>>>>>>> Stashed changes:.history/src/root/App_20221015033457.jsx
