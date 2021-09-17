import React from 'react';
import RenderTask from './RenderTaskComponent';
import { useSelector } from 'react-redux';
import sortTasks from './taskSorter';

const TaskList = () => {
    const taskList = useSelector(state => state.taskSlice.tasks);
    let sortedTasks = sortTasks(taskList);
    return (
        <div className='task-list'>
            {
                taskList.length > 0 &&
                sortedTasks.map((item, index) => < RenderTask task={item} key={index}/>)
            }
        </div>
    )
}

export default TaskList;