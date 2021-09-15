import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar fixed='top' bg='light' variant='light'>
                <Container>
                    <Navbar.Brand>#ToDo30</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Header;