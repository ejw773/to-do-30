import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from '@material-ui/icons/Delete';

const RenderTask = ({task, toggleTask, deleteTask}) => {
    let buttonColor = 'inherit';
    let buttonIcon = <CheckIcon/>;
    if (task.complete) {
        buttonColor = 'primary';
        buttonIcon = <CheckCircleIcon/>;
    }
    
    return (
        <ListItem>
            <Button color={buttonColor}>{buttonIcon}</Button>
            <ListItemText>{task.name}</ListItemText>
            <Button><DeleteIcon/></Button>
        </ListItem>
    )
}

export default RenderTask;