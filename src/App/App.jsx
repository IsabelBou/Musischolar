import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../themes/index';
import { RouterProvider } from "react-router-dom";
import router from '../components/router/Router';
import { KeyContext } from '../components/AppShell/SelectionContext';
import { useState } from 'react';

function App() {
  const [key, setKey] = useState(0);
  const value = { key, setKey };


  return (
    <ChakraProvider theme = { customTheme } cssVarsRoot = '#app' >
      <KeyContext.Provider value = { value }>
      <RouterProvider router = { router } />
      </KeyContext.Provider>
    </ChakraProvider>
  )
}

export default App