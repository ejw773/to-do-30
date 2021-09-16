import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <Navbar bg='dark' variant='dark'>
        <Container className='justify-content-center'>
            <Navbar.Brand href='#top'>Back to Top</Navbar.Brand>
        </Container>
    </Navbar>

    )
}

export default Footer;