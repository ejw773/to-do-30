import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const NewTask = () => {
  return (
    <InputGroup className="mb-3">
        <Form.Control type="text" placeholder="Add a task" />
        <Button type="button"> + </Button>
    </InputGroup>
  )
}

export default NewTask;