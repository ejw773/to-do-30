import React from 'react';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({item}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;
