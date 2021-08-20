import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Header from './HeaderComponent';
import AddTask from './AddTaskComponent';
import TaskList from './TaskListComponent'
import Footer from './FooterComponent';

const Main = () => {
    const [categoryList, setCategoryList] = useState(['Office', 'Home', 'Inbox', 'Shopping']);
    const [taskList, setTaskList] = useState([]);

    const newId = () => {
        let allIds = taskList.map((item) => item.id);
        let newId = Math.max(...allIds) + 1;
        return newId;
    };

    const deleteItem = (id) => {
         let s = taskList.filter(item => item.id !== id);
        setTaskList(s);
    };

    const toggleItem = (id) => {
        const targetIndex = taskList.findIndex((item) => item.id === id);
        const s = [...taskList];
        s[targetIndex].complete = !s[targetIndex].complete;
        setTaskList(s);
    };

    const addItem = (text) => {
        let id = newId();
        let newObject = {
            id: id,
            name: text,
            category: 'Inbox',
            complete: false
        };
        let updatedTasks = [...taskList, newObject];
        setTaskList(updatedTasks);
    };

    const addCategory = (text) => {
        console.log(`add category: ${text}`)
    };

    const deleteCategory = (text) => {
        console.log(`delete category: ${text}`)
    };

    const changeName = (text, id) => {
        console.log(`change: ${id} to: ${text}`)
    };

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('data'));
        setTaskList(data);
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    });

    return (
        <React.Fragment>
            <Header />
            <AddTask addItem={addItem}/>
            <TaskList taskList={taskList} toggleItem={toggleItem} deleteItem={deleteItem} addCategory={addCategory} deleteCategory={deleteCategory} changeName={changeName} />
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Main;
