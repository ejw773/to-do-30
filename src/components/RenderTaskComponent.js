import React from 'react';
import { List, ListItem, Checkbox, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

const RenderTask = ({ task, toggleItem, divider, deleteItem, addCategory, deleteCategory, changeName }) => {
    const handleToggle = (id) => {
        toggleItem(id);
    };

    return (
        <ListItem divider={divider}>
            <Checkbox  
                checked={task.complete}
                onClick={() => {handleToggle(task.id)}}
            />
        </ListItem>
    )
}

export default RenderTask;