import React, { useState } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Container from '@material-ui/core/Container';

const Main = () => {
    const [taskList, setTaskList] = useState([]);
    const newId = () => {
        let zeroId = 0;
        if (taskList.length !== 0) {
            let oldIds = taskList.map((item) => item.id);
            return Math.max(...oldIds) + 1;  
        } else {
            return zeroId;
        }
    }
    const addTask = (text) => {
        let id = newId();
        let taskObject = {
            id: id,
            task: text,
            complete: false
        };
        let updatedTasks = [...taskList, taskObject];
        setTaskList(updatedTasks);
    };
    const toggleTask = (id) => {
        let updatedTasks = [...taskList];
        let targetIndex = updatedTasks.findIndex((item) => item.id === id);
        updatedTasks[targetIndex].complete = !taskList[targetIndex].complete;
        setTaskList(updatedTasks);
        };
    const deleteTask = (id) => {
        let updatedTasks = taskList.filter((item) => item.id !== id);
        setTaskList(updatedTasks);
    };
    return (
        <Container maxWidth='lg'>
            <Header />
            <NewTask addTask={addTask}/>
            <TaskList taskList={taskList} toggleTask={toggleTask} deleteTask={deleteTask} />
            <Footer />
        </Container>
    )
}

export default Main;
