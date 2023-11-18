import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Toggle from './themes/components/ModeToggle';
import customTheme from './themes/index';
import CustomCard from './themes/components/CustomCard';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
    <div className="App">
      <Toggle />
    <CustomCard />
  </div>
  </ChakraProvider>
  )
}

export default App