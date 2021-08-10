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
    console.log(linkString);
    return (
        <Card>
            <Card.Body>
                <Card.Title>Day: {props.day}</Card.Title>
                <Card.Subtitle><a href={linkString} target="_blank" rel="noreferrer">{props.title}</a></Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default RenderCards;
