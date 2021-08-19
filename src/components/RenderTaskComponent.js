import React from 'react';
import { List, ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import DeleteOutline from '@material-ui/icons/DeleteOutline'

const RenderTask = ({task, toggleTask, deleteTask, divider}) => {
    return (
        <ListItem divider={divider}>
            <Checkbox
                onClick={() => toggleTask(task.id)}
                checked={task.complete}
                disableRipple
            />
            <ListItemText primary={task.task} />
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete Task' onClick={() => deleteTask(task.id)}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default RenderTask;