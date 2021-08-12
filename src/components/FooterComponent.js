import React from 'react';
import Navbar from'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <Navbar fixed='bottom' variant='dark' bg='dark'>
            <Container className='justify-content-center'>
                <Navbar.Text>Day 4: Style It Up!</Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer;