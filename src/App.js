import './App.css';
import Main from './components/MainComponent';
import { Paper } from '@material-ui/core';
import Ocean from './img/ocean.jpg';

function App() {
  return (
    <Paper 
      className="App"
      elevation={0}
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${Ocean})`,
        backgroundPosition: 'center',
        height: `100vh`
      }}
    >
      <Main />
    </Paper>
  );
}

export default App;
