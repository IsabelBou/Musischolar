import logo from './logo.svg';
import './App.css';
import ContentBlock from './components/ContentBlock';
import Toggle from './components/Toggle';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Toggle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContentBlock title="title" description="description" verovio="verovio"></ContentBlock>
      <ContentBlock title="title2" description="description2" verovio="verovio2"></ContentBlock>
    </div>
    </ChakraProvider>
  );
}

export default App;
