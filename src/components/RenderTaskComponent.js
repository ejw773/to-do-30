import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const RenderTask = ({ task, deleteToDo, toggleToDo }) => {
  const taskCompleted = {
    textDecoration: 'line-through'
  }
  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox
        checked={task.status}
        aria-label="Checkbox for Task"
        onChange={() => toggleToDo(task.id)}
      />
      <Form.Control
        style={task.status ? taskCompleted : null}
        type="text"
        value={task.name}
        readOnly
      ></Form.Control>
      <Button variant="danger" onClick={() => deleteToDo(task.id)}>X</Button>
    </InputGroup>
  )
}

export default RenderTask;