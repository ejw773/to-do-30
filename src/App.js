import './App.css';
import Main from './components/MainComponent';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

function App() {
  return (
    <Container className='App' maxWidth='md'>
        <Main />
    </Container>
  );
}

export default App;
