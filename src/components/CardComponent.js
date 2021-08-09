import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
