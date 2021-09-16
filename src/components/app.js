import React from 'react';
import './app.css'; 
import Main from './MainComponent';
import Image from '../img/nature.jpg'
import { Container } from 'react-bootstrap';

const App = () => {
    return (
        <Container className="App">
            <div id="bg">
                <img src={Image}/>
            </div>
            <Main />

        </Container>
    )
}

export default App;
