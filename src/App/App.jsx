import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../themes/index';
import { RouterProvider } from "react-router-dom";
import router from '../components/router/Router';

function App() {
  return (
    <ChakraProvider theme = { customTheme } cssVarsRoot = '#app' >
      <RouterProvider router = { router } />
    </ChakraProvider>
  )
}

export default App