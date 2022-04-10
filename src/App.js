// import logo from './logo.svg';
import profileImage from './img/myphoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1>hi friends</h1>
      <h2>Author : shyam kumar</h2>
      <img src={profileImage} alt="profie-image" />
    </div>
  );
}

export default App;
