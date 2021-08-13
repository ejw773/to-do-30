import React from 'react';
import Header from './HeaderComponent';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';
import Footer from './FooterComponent';
import Container from 'react-bootstrap/Container';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <NewTask />
                <TaskList />
            </Container>
            <Footer />
        </div>
    )
}

export default Main;