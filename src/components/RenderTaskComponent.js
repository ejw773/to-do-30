import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BsTrash, BsCircle, BsCheckCircle } from 'react-icons/bs';
import { deleteTask, toggleTask, modifyTask } from '../features/tasks/tasksSlice';

const RenderTask = ({task}) => {
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        let payloadData = {
            id: task.id,
            name: target.value
        }
        dispatch(modifyTask(payloadData))
    };

    let checkIcon = <BsCircle />
    if (task.complete) {
        checkIcon = <BsCheckCircle />
    };

    return (
        <InputGroup className='p-1'>
            <Button variant='light' onClick={() => dispatch(toggleTask(task.id))}>
                {checkIcon}
            </Button>
            <FormControl 
                value={task.name}            
                onChange={handleChange}
            />
            <Button variant='light' onClick={() => dispatch(deleteTask(task.id))}>
                <BsTrash/>
            </Button>
        </InputGroup>
    )
}

export default RenderTask;