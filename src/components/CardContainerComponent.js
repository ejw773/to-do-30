import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from './CardComponent'

const CardContainer = () => {
    return (
        <Container>
            <Row>
                <ProjectCard />
            </Row>
        </Container>
    )
}

export default CardContainer;