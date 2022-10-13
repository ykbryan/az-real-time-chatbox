import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [words, setWords] = useState("");
  useEffect(() => {
    fetch('/test')
      .then((res) => res.json())
      .then((data) => setWords(data.data))
  })
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
          { words }
        </a>
      </header>
    </div>
  );
}

export default App;
