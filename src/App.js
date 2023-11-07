import logo from './logo.svg';
import './App.css';
import ContentBlock from './components/ContentBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ContentBlock title="title" description="description" verovio="verovio"></ContentBlock>
        <ContentBlock title="title2" description="description2" verovio="verovio2"></ContentBlock>
      </header>
    </div>
  );
}

export default App;
