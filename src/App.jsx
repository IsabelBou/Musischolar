import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
//import Toggle from './themes/components/ModeToggle';
import customTheme from './themes/index';
import CustomCard from './themes/components/CustomCard';
import Header from './themes/components/Header'
import { cards } from './resources/constants';

function App() {
  return ( //resetCSS={false} inside provider solves blank bottom issue
    <ChakraProvider theme={customTheme} >
      <div className="App">
        <Header />
        <CustomCard {...cards.TEMPLATE}/>
      </div>
    </ChakraProvider>
  )
}

export default App