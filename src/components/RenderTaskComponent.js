import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/taskList/taskListSlice';
import { ListItem, ListItemText, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const RenderTask = ({task, index}) => {
    const dispatch = useDispatch();
    let textStyle = 'incomplete';
    let buttonColor = 'inherit';
    let buttonIcon = <CheckIcon/>;
    if (task.complete) {
        buttonColor = 'primary';
        buttonIcon = <CheckCircleIcon/>;
        textStyle = 'completed';
    }
    
    return (
        <ListItem>
            <Button 
                color={buttonColor}
                onClick={() => dispatch(toggleTask(index))}
            >{buttonIcon}</Button>
            <ListItemText className={textStyle}>{task.name}</ListItemText>
            <Button onClick={() => dispatch(deleteTask(task.id))}><DeleteIcon/></Button>
        </ListItem>
    )
}

export default RenderTask;