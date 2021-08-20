import React from 'react';
import { List, Paper, Grid } from '@material-ui/core';
import RenderTask from './RenderTaskComponent';
import { identifier, isTemplateLiteral } from '@babel/types';

const TaskList = ({taskList}) => {
    return (
        <React.Fragment>
            {taskList.length > 0 && (
                <Paper>
                    <List style={{ overflow: 'scroll'}}>
                        {taskList.map((item) => (<RenderTask key={item.id} task={item}/>))}
                    </List>
                </Paper> 
            )}
        </React.Fragment>
    )
}

export default TaskList;