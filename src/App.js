import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Container className="App">
            <Main />
        </Container>
    )
}

export default App;