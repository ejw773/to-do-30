import React, { useState, useEffect } from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Main = () => {
    const [taskList, setTaskList] = useState([]);
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
    const toggleTask = (id) => {
        let newTaskList = [...taskList];
        let targetIndex = newTaskList.findIndex(item => item.id === id);
        newTaskList[targetIndex].complete = !taskList[targetIndex].complete;
        setTaskList(newTaskList);
    };
    const deleteTask = (id) => {
        let newTaskList = [...taskList];
        newTaskList = taskList.filter(item => item.id !== id);
        setTaskList(newTaskList);
    }

    useEffect(() => {
        let storedData = localStorage.getItem('data');
        if (storedData) {
            setTaskList(JSON.parse(storedData));
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    });

    return (
        <div>
            <Header />
            <Container>
                <Row className='m-3 justify-content-center'>
                    <NewTask addTask={addTask}/>
                </Row>
                <Row className='m-3 justify-content-center'>
                    <TaskList taskList={taskList} toggleTask={toggleTask} deleteTask={deleteTask}/>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Main;