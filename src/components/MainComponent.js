import React, { useState } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Container from '@material-ui/core/Container';

const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            task: 'walk the dog',
            complete: false
        },
        {
            id: 1,
            task: 'wash the cat',
            complete: true
        },
        {
            id: 2,
            task: 'cook dinner',
            complete:false
        }
    ]);
    const newId = () => {
        let oldIds = taskList.map((item) => item.id);
        return Math.max(...oldIds) + 1;
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
