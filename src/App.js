import './App.css';
import Main from './components/MainComponent';
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Paper 
      className="App"
      elevation={0}
      style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(https://todo30.com/10/ocean.jpg)`,
        backgroundPosition: 'center',
        height: `100vh`
      }}
    >
      <Main />
    </Paper>
  );
}

export default App;
