import React from 'react';
import { Card } from 'react-bootstrap';
import { baseUrl } from '../shared/baseUrl';

const RenderCards = (props) => {
    let dayString = props.day.toString();
    let adjustedDayString;
    if (dayString.length === 1) {
        adjustedDayString = '0' + dayString + '/';
    } else {
        adjustedDayString = dayString + '/';
    };
    const linkString = baseUrl + adjustedDayString;
    return (
        <Card>
            <Card.Header>Day: {props.day}</Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle><a href={linkString}>Live Site</a> | <a href={props.code} target="_blank" rel="noreferrer">Code</a></Card.Subtitle>
                <Card.Text>{props.comment}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RenderCards;
