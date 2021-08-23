import React, { useState} from 'react';
import RenderTask from './RenderTaskComponent';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';

const TaskList = () => {
    const taskList = useSelector((state) => state.taskList);
    return (
        <Paper>
            {taskList.map((item, index) => {
                return (
                    <RenderTask task={item} key={index} />
                )
            })}
        </Paper>
    )
}

export default TaskList;