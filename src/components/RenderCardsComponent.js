import React from 'react';
import { Card, ListGroup, Accordion } from 'react-bootstrap';
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

            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{comment}</Card.Text>
                        </Card.Body>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup>
                            {
                                bullets &&
                                bullets.map((item) => <RenderList key={item} bullet={item} />)
                            }
                        </ListGroup>
                        <Card.Body>
                            <Card.Subtitle><a href={linkString} target="_blank" rel="noreferrer">Live Site</a> | <a href={gitLinkString} target="_blank" rel="noreferrer">Code</a></Card.Subtitle>
                        </Card.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Card>
    )
}

export default RenderCards;
