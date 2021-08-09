import React from 'react';
import { Card } from 'react-bootstrap';

const RenderCards = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Day: {props.day}</Card.Title>
                <Card.Subtitle><a href={props.link} target="_blank" rel="noreferrer">{props.title}</a></Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default RenderCards;
