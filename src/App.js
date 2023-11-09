import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ContentBlock from './ContentBlock';
import Toggle from './themes/components/ModeToggle';
import customTheme from './themes/index';
import CustomCard from './themes/components/CustomCard';


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <div className="App">
        <Toggle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContentBlock title="title" description="description" verovio="verovio"></ContentBlock>
      <CustomCard />
    </div>
    </ChakraProvider>
  );
}

export default App;
