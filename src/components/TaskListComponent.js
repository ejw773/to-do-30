import React, { useState} from 'react';
import RenderTask from './RenderTaskComponent';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../features/taskList/taskListSlice';
import { Paper } from '@material-ui/core';


const TaskList = () => {
    const taskList = useSelector((state) => state.taskList);
    return (
        <Paper>
            {taskList.map((item, index) => {
                return (
                    <RenderTask task={item} key={index} toggleTask={toggleTask} deleteTask={deleteTask} />
                )
            })}
        </Paper>
    )
}

export default TaskList;