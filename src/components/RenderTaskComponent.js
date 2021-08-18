import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const RenderTask = ({task, toggleTask, deleteTask}) => {
    let theClass = 'unfinished';
    if (task.complete) {
        theClass = 'finished'
    };
    return (
        <Typography className={theClass} ><Button onClick={() => toggleTask(task.id)}><CheckIcon/></Button>{task.task}<Button onClick={() => deleteTask(task.id)}><DeleteIcon/></Button></Typography>
    )
}

export default RenderTask;