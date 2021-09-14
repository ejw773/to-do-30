import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import AddTask from './AddTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
    return (
        <React.Fragment>
            <Header />
            <AddTask />
            <TaskList />
            <Footer />
        </React.Fragment>
    )
}

export default Main;