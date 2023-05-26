import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = ({ toDoList, addToDo, deleteToDo, toggleToDo }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NewTask addToDo={addToDo} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList toDoList={toDoList} deleteToDo={deleteToDo} toggleToDo={toggleToDo} />
        </Col>
      </Row>
    </Container>
  )
}

export default Main;