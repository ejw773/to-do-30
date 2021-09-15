import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask, modifyTask, toggle } from '../features/tasks/tasksSlice'

const RenderTask = ({index, task}) => {
    const dispatch = useDispatch();
    return (
        <Row className="justify-content-md-center">
            <Col>
                <Button onClick={() => dispatch(toggle(index))}>Done</Button>
            </Col>
            <Col className="task-text">
                <p>{task.name}</p>
            </Col>
            <Col>
                <Button onClick={() => dispatch(deleteTask(task.id))}>Delete</Button>
            </Col>
        </Row>
    )
}

export default RenderTask;