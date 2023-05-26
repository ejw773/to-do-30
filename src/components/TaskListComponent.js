import React from 'react';
import Row from 'react-bootstrap/Row';
import RenderTask from './RenderTaskComponent'


const TaskList = ({ tasks }) => {
  const theTasks = ['do something', 'do something else', 'do something more']
  return (
    <Row>
      {theTasks.map((task) => {
        return (
          <RenderTask key={task} task={task} />
      )})}
    </Row>
  )
}

export default TaskList;