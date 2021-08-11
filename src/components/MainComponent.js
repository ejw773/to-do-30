import React, { useState } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
    // Set up State
    const [taskList, setTaskList] = useState([
        {
            task: 'wash the cat',
            id: '0',
            isCompleted: false
        },
        {
            task: 'watch a movie',
            id: '1',
            isCompleted: true
        },
        {
            task: 'finish to-do app',
            id: '2',
            isCompleted: false
        }
    ]);

    // Set up Methods
    const handleDelete = ({target}) => {
        alert(`Delete Task ${target.id}: ${target.value}?`);
        let newTaskList = [...taskList];
        newTaskList = taskList.filter((item) => item.id !== target.id);
        setTaskList(newTaskList);
    };
    const toggleCompleted = ({target}) => {
        let newTaskList = [...taskList];
        newTaskList[target.id].isCompleted = !newTaskList[target.id].isCompleted;
        setTaskList(newTaskList);        
    }
    const createNewTask = () => {
        console.log('create new task')
    }


    // Return JSX
    return (
        <div>
            <Header />
            {/* <NewTask /> */}
            <TaskList taskList={taskList} handleDelete={handleDelete} toggleCompleted={toggleCompleted} />
        </div>
        
    )
}

export default Main;
