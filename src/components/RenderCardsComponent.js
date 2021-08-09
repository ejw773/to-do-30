import React from 'react';
import { Card } from 'react-bootstrap';

const RenderCards = (props) => {
    console.log(props)
    return (
        <Card>
            <Card.Body>
                <Card.Title>Day: {props.day}</Card.Title>
                <Card.Subtitle>{props.title}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default RenderCards;
