import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import ContentBlock from './components/ContentBlock';
import Toggle from './components/Toggle';
import theme from './themes/theme';
import CustomCard from './components/CustomCard';


function App() {
  return (
    <ChakraProvider theme={theme}>
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
