import React from 'react';
import { Card } from 'react-bootstrap';
import { baseUrl, gitBaseUrl } from '../shared/baseUrl';

const RenderCards = ({title, day, comment}) => {
    let dayString = day.toString();
    let adjustedDayString;
    let gitDayString;
    if (dayString.length === 1) {
        adjustedDayString = '0' + dayString + '/';
        gitDayString = '0' + dayString;
    } else {
        adjustedDayString = dayString + '/';
        gitDayString = dayString;
    };
    console.log(`Day String: ${adjustedDayString}`);
    console.log(`Git Day String: ${gitDayString}`)
    const linkString = baseUrl + adjustedDayString;
    const gitLinkString = gitBaseUrl + gitDayString;
    console.log(gitLinkString);
    return (
        <Card>
            <Card.Header>Day: {day}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle><a href={linkString}>Live Site</a> | <a href={gitLinkString} target="_blank" rel="noreferrer">Code</a></Card.Subtitle>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RenderCards;
