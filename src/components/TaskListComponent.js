import React from 'react';
import RenderTask from './RenderTaskComponent';

const TaskList = ({taskList, toggleTask, deleteTask}) => {
    return (
        <div>
            {taskList.map((task) => <RenderTask key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />)}
        </div>
    )
}

export default TaskList;