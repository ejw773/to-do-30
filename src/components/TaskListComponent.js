import React from 'react';
import Row from 'react-bootstrap/Row';
import RenderTask from './RenderTaskComponent'


const TaskList = ({ toDoList, deleteToDo, toggleToDo }) => {
  return (
    <Row>
      {toDoList.map((task, index) => {
        return (
          <RenderTask key={index} task={task} toDoList={toDoList} deleteToDo={deleteToDo} toggleToDo={toggleToDo} />
      )})}
    </Row>
  )
}

export default TaskList;