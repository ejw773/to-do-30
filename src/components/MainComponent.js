import React, { useState } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Container from 'react-bootstrap/Container';

const Main = () => {
    // Set up State
    const [taskList, setTaskList] = useState([  
    ]);

    // Set up Methods
    const handleDelete = ({target}) => {
        let itemId = parseInt(target.id);
        let newTaskList = taskList.filter((item) => item.id !== itemId);
        setTaskList(newTaskList);
    };
    const toggleCompleted = (targetId) => {
        let newTaskList = [...taskList];
        let targetIndex = newTaskList.findIndex(item => item.id === targetId);
        newTaskList[targetIndex].isCompleted = !newTaskList[targetIndex].isCompleted;
        setTaskList(newTaskList);        
    }
    const createNewTask = (userInput) => {
        let newId = 0;
        if (taskList.length >= 1) {
            let existingIds = taskList.map((item) => item.id);
            newId = (Math.max(...existingIds)) + 1;
        };
        let newTask = {
            task: userInput,
            id: newId,
            isCompleted: false
        };
        let newTaskList = [...taskList, newTask];
        setTaskList(newTaskList);
    }

    // Return JSX
    return (
        <div>
            <Header />
            <Container>
                <NewTask createNewTask={createNewTask} />
                <TaskList className='taskContainer' taskList={taskList} handleDelete={handleDelete} toggleCompleted={toggleCompleted} />
            </Container>
        </div>
        
    )
}

export default Main;
