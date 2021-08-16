import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div>
            <Navbar variant='light' bg='light'>
                <Container>
                    <Navbar.Brand><FontAwesomeIcon icon={faCheckDouble} /></Navbar.Brand>
                </Container>
            </Navbar>
            <div></div>
        </div>
    )
}

export default Header;
