import React from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask, modifyTask, toggle } from '../features/tasks/tasksSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const trashCan = <FontAwesomeIcon icon={faTrash} />
const squareBox = <FontAwesomeIcon icon={faSquare} />
const checkBox = <FontAwesomeIcon icon={faCheckSquare} />

const RenderTask = ({index, task}) => {
    const dispatch = useDispatch();
    let displayClass = 'task-text p-1 unfinished';
    let displayIcon = squareBox;

    if (task.complete) {
        displayClass = 'task-text p-1 finished';
        displayIcon = checkBox;
    };

    const handleChange = ({target}) => {
        let changedData = {index: index, name: target.value};
        dispatch(modifyTask(changedData));
    }

    return (
        <Row className="justify-content-md-center">
            <Col className={displayClass}>
                <InputGroup>
                <Button variant='light' onClick={() => dispatch(toggle(index))}>{displayIcon}</Button>
                <FormControl 
                    value={task.name}
                    onChange={handleChange}
                />
                <Button variant='light' onClick={() => dispatch(deleteTask(task.id))}>{trashCan}</Button>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default RenderTask;