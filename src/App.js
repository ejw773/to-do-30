import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
