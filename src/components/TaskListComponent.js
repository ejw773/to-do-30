import React from 'react';
import RenderTask from './RenderTaskComponent';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const taskList = useSelector(state => state.taskSlice.tasks);
    return (
        <div>
            {
                taskList.length > 0 &&
                taskList.map((item, index) => < RenderTask task={item} key={index}/>)
            }
        </div>
    )
}

export default TaskList;