import React from 'react';

const TaskList = ({taskList}) => {
    return (
        <ul>
            {taskList.map((item) => {return (
                <div>
                    <li key={item.id}>{item.task}</li>
                    <button>Delete</button>
                </div>
            )})}
        </ul>
    )
}

export default TaskList