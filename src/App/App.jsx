import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../themes/index';
import AppShell from '../components/AppShell/AppShell';

function App() {
  return (
    <ChakraProvider theme = {customTheme} >
      <AppShell/>
    </ChakraProvider>
  )
}

export default App