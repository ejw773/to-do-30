import React, { useState } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
    // Set up State
    const [taskList, setTaskList] = useState([
        // {
        //     task: 'wash the cat',
        //     id: 0,
        //     isCompleted: false
        // },
        // {
        //     task: 'watch a movie',
        //     id: 1,
        //     isCompleted: true
        // },
        // {
        //     task: 'finish to-do app',
        //     id: 2,
        //     isCompleted: false
        // }
    ]);

    // Set up Methods
    const handleDelete = ({target}) => {
        let itemId = parseInt(target.id);
        let newTaskList = [...taskList];
        newTaskList = taskList.filter((item) => item.id !== itemId);
        setTaskList(newTaskList);
    };
    const toggleCompleted = ({target}) => {
        console.log(target);
        let targetId = parseInt(target.id);
        let newTaskList = [...taskList];
        newTaskList[target.id].isCompleted = !newTaskList[targetId].isCompleted;
        setTaskList(newTaskList);        
    }
    const createNewTask = (userInput) => {
        let newId = 0;
        if (taskList.length >= 1) {
            console.log('there is at least one task')
            let existingIds = taskList.map((item) => item.id);
            newId = (Math.max(...existingIds)) + 1;
        }
        let newTask = {
            task: userInput,
            id: newId,
            isCompleted: false
        };
        let newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
        console.log(taskList);
    }

    // Return JSX
    return (
        <div>
            <Header />
            <NewTask createNewTask={createNewTask} />
            <TaskList taskList={taskList} handleDelete={handleDelete} toggleCompleted={toggleCompleted} />
        </div>
        
    )
}

export default Main;
