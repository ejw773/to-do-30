import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { Container } from 'react-bootstrap';
import Tree from './img/tree.jpg'

const App = () => {
    return (
        <Container className="App">
            <div id="bg">
                <img src={Tree} alt='Background'/>
            </div>
            <Main />

        </Container>
    )
}

export default App;