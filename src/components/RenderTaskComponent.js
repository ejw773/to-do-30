import React from 'react';
import { List, ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

const RenderTask = ({ task, toggleItem, divider, deleteItem, addCategory, deleteCategory, changeName }) => {
    const handleToggle = () => {
        toggleItem(task.id);
    };
    const handleClick = () => {
        deleteItem(task.id);
    }

    return (
        <ListItem divider={divider}>
            <Checkbox  
                checked={task.complete}
                onClick={handleToggle}
                disableRipple
            />
            <ListItemText primary={task.name} />
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete Task' onClick={handleClick}>
                    <DeleteOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default RenderTask;