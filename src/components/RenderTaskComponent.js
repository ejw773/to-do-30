import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const RenderTask = ({task}) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for the following task" />
      <Form.Control type="text" value={task}></Form.Control>
      <Button>Done</Button>
    </InputGroup>
  )
}

export default RenderTask;