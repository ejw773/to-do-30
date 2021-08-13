import React from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';

const Main = () => {
    return (
        <div>
            <Header />
            <NewTask />
            <TaskList />
            <Footer />
        </div>
    )
}

export default Main;