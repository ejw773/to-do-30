import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField'

const RenderTask = ({task, deleteTask, modifyTask, toggleTask}) => {
    let checkBox;
    let checkColor;
    if (task.complete) {
        checkBox = <CheckCircleIcon/>;
        checkColor = 'primary'
    } else {
        checkBox = <CheckIcon/>;
        checkColor = ''
    };
    let handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.target.blur();
        }
    }
    
    return (
        <div>
            <TextField 
            variant='outlined'
            value={task.task}
            size='small'
            onChange={(target) => modifyTask(target.target.value, task.id)}
            onKeyPress={handleEnter}
            />
            <ButtonGroup variant='contained' size='large'>
                <Button color={checkColor} startIcon={checkBox} onClick={() => toggleTask(task.id)}></Button>
                <Button color='secondary' endIcon={<DeleteIcon/>} onClick={() => deleteTask(task.id)}></Button>
            </ButtonGroup>
        </div>
    )
}

export default RenderTask;

//  deleteTask={deleteTask} modifyTask={modifyTask} toggleTask={toggleTask} 