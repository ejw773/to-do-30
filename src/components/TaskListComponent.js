import React from 'react';
import RenderTask from './RenderTaskComponent';
import { Paper, List } from '@material-ui/core'

const TaskList = ({taskList, toggleTask, deleteTask}) => {
    return (
        <React.Fragment>
            { taskList.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {taskList.map((item, index) => 
                        <RenderTask 
                            key={item.id} 
                            task={item} 
                            toggleTask={toggleTask} 
                            deleteTask={deleteTask} 
                            divider={index !== taskList.length - 1} 
                    />)}    
                </List>
            </Paper>
            )}
        </React.Fragment>
    )
}

export default TaskList;
