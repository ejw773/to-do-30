import React from 'react';
import { List, Paper, Grid } from '@material-ui/core';
import RenderTask from './RenderTaskComponent';

const TaskList = ({taskList, toggleItem, deleteItem, addCategory, deleteCategory, changeName}) => {
    return (
        <React.Fragment>
            {taskList.length > 0 && (
                <Paper>
                    <List style={{ overflow: 'scroll'}}>
                        {taskList.map((item, index) => (
                        <RenderTask 
                            key={item.id} 
                            divider={index !== taskList.length - 1}
                            task={item}
                            toggleItem={toggleItem}
                            deleteItem={deleteItem}
                            addCategory={addCategory}
                            deleteCategory={deleteCategory}
                            changeName={changeName}
                            />
                        ))}
                    </List>
                </Paper> 
            )}
        </React.Fragment>
    )
}

export default TaskList;