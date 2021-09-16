import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { baseUrl, gitBaseUrl } from '../shared/baseUrl';
import RenderList from './RenderList';

const RenderCards = ({title, day, comment, bullets}) => {
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
    const linkString = baseUrl + adjustedDayString;
    const gitLinkString = gitBaseUrl + gitDayString;
    return (
        <Card className='day-card'>
            <Card.Header as='h5'>Day: {day}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
            <ListGroup variant='flush'>
                {
                    bullets &&
                    bullets.map((item) => <RenderList key={item} bullet={item} />)
                }
            </ListGroup>
            <Card.Body>
                <Card.Subtitle><a href={linkString}>Live Site</a> | <a href={gitLinkString} target="_blank" rel="noreferrer">Code</a></Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default RenderCards;
