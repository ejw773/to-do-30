import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/taskList/taskListSlice';
import { ListItem, ListItemText, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const RenderTask = ({task}) => {
    const dispatch = useDispatch();
    let buttonColor = 'inherit';
    let buttonIcon = <CheckIcon/>;
    if (task.complete) {
        buttonColor = 'primary';
        buttonIcon = <CheckCircleIcon/>;
    }
    
    return (
        <ListItem>
            <Button 
                color={buttonColor}
                onClick={() => dispatch(toggleTask(task.id))}
            >{buttonIcon}</Button>
            <ListItemText>{task.name}</ListItemText>
            <Button onClick={() => dispatch(deleteTask(task.id))}><DeleteIcon/></Button>
        </ListItem>
    )
}

export default RenderTask;