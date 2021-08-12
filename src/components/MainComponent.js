import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';


const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            task: 'wash the cat',
            isComplete: false
        },
        {
            id: 1,
            task: 'watch a movie',
            isComplete: true
        },
        {
            id: 3,
            task: 'go to bed',
            isComplete: false
        }
    ])
    const makeNewId = () => {
        let newId = 0;
        if (taskList.length >= 1) {
            let allIds = taskList.map(item => item.id);
            newId = (Math.max(...allIds)) + 1;
        };
        return newId;
    }
    const addTask = (task) => {
        let newId = makeNewId();
        let newTask = {
            id: newId,
            task: task,
            isComplete: false
        }
        let updatedTaskList = [...taskList, newTask];
        setTaskList(updatedTaskList);
    };
    const toggleStatus = (targetId) => {
        let targetIndex = taskList.findIndex((item) => item.id === targetId);
        let updatedTaskList = [...taskList];
        updatedTaskList[targetIndex].isComplete = !updatedTaskList[targetIndex].isComplete;
        setTaskList(updatedTaskList);
    };
    const deleteTask = (targetId) => {
        let updatedTaskList = [...taskList];
        updatedTaskList = updatedTaskList.filter((item) => item.id !== targetId);
        setTaskList(updatedTaskList);
    }
    return (
        <div>
            <Header />
            <Container>
            <NewTask addTask={addTask}/>
            <TaskList toggleStatus={toggleStatus} deleteTask={deleteTask} taskList={taskList}/>
            </Container>
        </div>
    )
}

export default Main;