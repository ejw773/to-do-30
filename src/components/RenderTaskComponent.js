import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const RenderTask = ({index, task}) => {
    console.log(task);
    return (
        <Row className="justify-content-md-center">
            <Col>
                <Button onClick={() => console.log('click')}>Done</Button>
            </Col>
            <Col className="task-text">
                <p>{task.name}</p>
            </Col>
            <Col>
                <Button onClick={() => console.log('click')}>Delete</Button>
            </Col>
        </Row>
    )
}

export default RenderTask;