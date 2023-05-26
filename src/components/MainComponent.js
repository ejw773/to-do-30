import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewTask from './NewTaskComponent';
import TaskList from './TaskListComponent';

const Main = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NewTask />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </Container>
  )
}

export default Main;