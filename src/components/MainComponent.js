import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Header from './HeaderComponent';
import AddTask from './AddTaskComponent';
import TaskList from './TaskListComponent'
import Footer from './FooterComponent';

const Main = () => {
    const [categoryList, setCategoryList] = useState(['Office', 'Home', 'Inbox', 'Shopping']);
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            name: 'Clean up desk',
            category: 'Office',
            complete: false
        },
        {
            id: 2,
            name: 'Change spark plugs',
            category: 'Home',
            complete: true
        },
        {
            id: 10,
            name: 'Buy LaCroix',
            category: 'Shopping',
            complete: false
        }
    ]);

    const newId = () => {
        let allIds = taskList.map((item) => item.id);
        console.log(allIds);
    };

    const deleteItem = (id) => {
        console.log(`delete: ${id}`)
    };

    const toggleItem = (id) => {
        const targetIndex = taskList.findIndex((item) => item.id === id);
        const s = [...taskList];
        s[targetIndex].complete = !s[targetIndex].complete;
        setTaskList(s);
    };

    const addItem = (text) => {
        let id = newId();
        console.log(`new task: ${text} with id: ${id}`)
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
        console.log(data);
        setTaskList(data);
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(taskList))
    }, []);

    return (
        <React.Fragment>
            <Header />
            <AddTask addItem={addItem}/>
            <TaskList taskList={taskList} toggleItem={toggleItem} deleteItem={deleteItem} addCategory={addCategory} deleteCategory={deleteCategory} changeName={changeName} />
            <Footer />
        </React.Fragment>
    )
}

export default Main;
