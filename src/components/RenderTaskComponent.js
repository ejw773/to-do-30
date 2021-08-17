import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const RenderTask = ({task, deleteTask, modifyTask, toggleTask}) => {
    let checkBox;
    if (task.complete) {
        checkBox = <CheckCircleIcon/>;
    } else {
        checkBox = <CheckIcon/>;
    };
    
    return (
        <div>
            <ButtonGroup>
                <Button variant='contained' color='primary' startIcon={checkBox} onClick={() => toggleTask(task.id)}></Button>
                <Button variant='contained' color='secondary' endIcon={<DeleteIcon/>} onClick={() => deleteTask(task.id)}></Button>
            </ButtonGroup>
            <p>{task.task}</p>
        </div>
    )
}

export default RenderTask;

//  deleteTask={deleteTask} modifyTask={modifyTask} toggleTask={toggleTask} 