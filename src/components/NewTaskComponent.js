import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const NewTask = ({ addToDo }) => {
  const [userInput, setUserInput] = useState('brush teeth')
  const handleInput = (e) => {
    setUserInput(e.target.value);
  }
  const handleSubmit = () => {
    if (userInput != '') {
      addToDo(userInput);
      setUserInput('');
    }
  }
  return (
    <InputGroup className="mb-3">
      <Form.Control type="text" placeholder="Add a task" value={userInput} onChange={(e) => handleInput(e) } />
        <Button variant="success" onClick={handleSubmit}> + </Button>
    </InputGroup>
  )
}

export default NewTask;