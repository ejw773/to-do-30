import React from 'react';

const TaskList = (props) => {
    const { taskList, toggleCompleted, handleDelete } = props;
    return (
        <ul>
            {taskList.map((item, index) => {return (
                <div key={index}>
                    <input type='checkbox' id={item.id} name={item.task} value={item.task} checked={item.isCompleted} onChange={toggleCompleted} />
                    <label htmlFor={item.id}>{item.task}</label>
                    <button id={item.id} onClick={handleDelete} value={item.task}>Delete</button>
                </div>
            )})}
        </ul>
    )
}

export default TaskList
