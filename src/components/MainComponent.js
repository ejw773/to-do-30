import React, { useState, useEffect } from 'react';
import Header from'./HeaderComponent';
import Footer from './FooterComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Main = () => {
    const [taskList, setTaskList] = useState([]);

    const makeNewId = () => {
        let newId = 0;
        if (taskList.length >= 1) {
            let allIds = taskList.map((item) => item.id);
            newId = Math.max(...allIds) + 1;
        };
        return newId;
    };

    const modifyTask = (id, text) => {
        let targetIndex = taskList.findIndex((item) => item.id === id);
        if (text !== '') {
            let updatedState = [...taskList];
            updatedState[targetIndex].task = text;
            setTaskList(updatedState);
        } else {
            deleteTask(id);
        }
    };

    const addTask = (newTask) => {
        let newId = makeNewId();
        let newTaskObject = {
            id: newId,
            task: newTask,
            complete: false
        };
        let updatedTaskList = [...taskList, newTaskObject];
        setTaskList(updatedTaskList);
    };

    const deleteTask = (id) => {
        let newTaskList = taskList.filter((item) => item.id !== id);
        setTaskList(newTaskList);
    }

    const toggleTask = (id) => {
        let updatedTaskList = [...taskList];
        let targetIndex = taskList.findIndex((item) => item.id === id);
        updatedTaskList[targetIndex].complete = !taskList[targetIndex].complete;
        setTaskList(updatedTaskList);
    };

    useEffect(() => {
        let storedData = localStorage.getItem('data');
        if (storedData) {
            setTaskList(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    });

    return (
        <div>
            <Header />
            <Container>
                <Row className='m-3'>
                    <NewTask addTask={addTask}/>
                    <TaskList taskList={taskList} toggleTask={toggleTask} modifyTask={modifyTask} deleteTask={deleteTask}/>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Main;
