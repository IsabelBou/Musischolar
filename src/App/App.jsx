import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../themes';
import { RouterProvider } from "react-router-dom";
import router from '../components/router/Router';
import { KeyContext, TempoContext } from '../context';
import { useState } from 'react';

function App() {
  const [ key, setKey ] = useState(0);
  const keys = { key, setKey };
  const [ tempo, setTempo ] = useState(1);
  const tempoMultiplier = { tempo, setTempo };


  return (
    <ChakraProvider theme = { customTheme } cssVarsRoot = '#app' >
      <KeyContext.Provider value = { keys }>
        <TempoContext.Provider value = { tempoMultiplier} >
          <RouterProvider router = { router } />
        </TempoContext.Provider>
      </KeyContext.Provider>
    </ChakraProvider>
  )
}

export default App