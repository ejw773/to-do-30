import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { BsTrash, BsCircle, BsCheckCircle } from 'react-icons/bs';
import { toggleTask, modifyTask, deleteTask } from '../features/tasks/tasksSlice';

const RenderTask = ({task}) => {

    const dispatch = useDispatch();

    const toggleTask = () => {
//        console.log(`toggle task: ${task.id}`)
        dispatch(toggleTask());
    };

    const deleteTask = () => {
        //console.log(`delete task: ${task.id}`);
        dispatch(deleteTask(task.id))
    };

    const handleChange = ({target}) => {
        console.log(target.value)
    };

    let checkIcon = <BsCircle />
    if (task.complete) {
        checkIcon = <BsCheckCircle />
    };

    return (
        <InputGroup>
            <Button variant='light' onClick={() => dispatch(toggleTask)}>
                {checkIcon}
            </Button>
            <FormControl 
                value={task.name}            
                onChange={handleChange}
            />
            <Button variant='light' onClick={deleteTask}>
                <BsTrash/>
            </Button>
        </InputGroup>
    )
}

export default RenderTask;