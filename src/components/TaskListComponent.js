import React from 'react';
import RenderTask from './RenderTaskComponent';

const TaskList = ({taskList, toggleTask, deleteTask}) => {
    return (
        <div>
            {taskList.map((item) => <RenderTask key={item.id} task={item} toggleTask={toggleTask} deleteTask={deleteTask} />)}    
        </div>
    )
}

export default TaskList;
