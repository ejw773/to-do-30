import React from 'react';
import ProjectCard from './CardComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const CardContainer = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <p>Card Container</p>
                </Col>
            </Row>
        </Container>
    )
}

export default CardContainer;