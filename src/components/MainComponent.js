import React, { useState } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';
import Container from 'react-bootstrap/Container';

const Main = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            task: 'write tasks',
            complete: true
        },
        {
            id: 1,
            task: 'write more tasks',
            complete: false
        },
        {
            id: 2,
            task: 'write even more tasks',
            complete: false
        }
    ]);
    const addTask = (newTask) => {
        let id = newId();
        let newTaskObject = {
            id: id,
            task: newTask,
            complete: false
        };
        let taskListCopy = [...taskList, newTaskObject];
        setTaskList(taskListCopy);
    };
    const newId = () => {
        let newNum = 0;
        if (taskList.length > 0) {
            let allIds = taskList.map(item => item.id);
            newNum = Math.max(...allIds) + 1;
        };
        return newNum;
    };
    return (
        <div>
            <Header />
            <Container>
                <NewTask addTask={addTask}/>
                <TaskList taskList={taskList}/>
            </Container>
            <Footer />
        </div>
    )
}

export default Main;