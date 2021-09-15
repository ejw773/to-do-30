import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask, modifyTask, toggle } from '../features/tasks/tasksSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const trashCan = <FontAwesomeIcon icon={faTrash} />
const squareBox = <FontAwesomeIcon icon={faSquare} />
const checkBox = <FontAwesomeIcon icon={faCheckSquare} />

const RenderTask = ({index, task}) => {
    const dispatch = useDispatch();
    let displayClass = 'task-text unfinished';
    let displayIcon = squareBox;
    let displayColor = 'warning'
    if (task.complete) {
        displayClass = 'task-text finished';
        displayIcon = checkBox;
        displayColor = 'success';
    };
    return (
        <Row className="justify-content-md-center">
            <Col>
                <Button variant={displayColor} onClick={() => dispatch(toggle(index))}>{displayIcon}</Button>
            </Col>
            <Col className={displayClass}>
                <p>{task.name}</p>
            </Col>
            <Col>
                <Button variant='danger' onClick={() => dispatch(deleteTask(task.id))}>{trashCan}</Button>
            </Col>
        </Row>
    )
}

export default RenderTask;