import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField'

const RenderTask = ({task, deleteTask, modifyTask, toggleTask}) => {
    let checkBox;
    if (task.complete) {
        checkBox = <CheckCircleIcon/>;
    } else {
        checkBox = <CheckIcon/>;
    };
    
    return (
        <div>
            <TextField 
            variant='outlined'
            value={task.task}
            size='small'
            onChange={(target) => modifyTask(target.target.value, task.id)}
            />
            <ButtonGroup variant='contained' size='large'>
                <Button color='primary' startIcon={checkBox} onClick={() => toggleTask(task.id)}></Button>
                <Button color='secondary' endIcon={<DeleteIcon/>} onClick={() => deleteTask(task.id)}></Button>
            </ButtonGroup>
        </div>
    )
}

export default RenderTask;

//  deleteTask={deleteTask} modifyTask={modifyTask} toggleTask={toggleTask} 