import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const NewTask = ({addTask}) => {
    const [userInput, setUserInput] = useState('');
    const handleChange = ({target}) => {
        let newInput = target.value;
        setUserInput(newInput);
    };
    const handleClick = () => {
        if (userInput !== '') {
            addTask(userInput);
            setUserInput('');
        }
    };
    const handleKeyPress = ({key}) => {
        if (key === 'Enter') {
            handleClick();
        }
    }
    return (
        <Row className="p-3">
            <InputGroup>
                <FormControl
                    onChange={handleChange}
                    value={userInput}
                    onKeyPress={handleKeyPress}
                />
                <Button onClick={handleClick}>Add</Button>
            </InputGroup>
        </Row>
    )
}

export default NewTask;