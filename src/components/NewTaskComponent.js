import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const NewTask = () => {
    const [userInput, setUserInput] = useState('hi');
    const handleChange = ({target}) => {
        let newInput = target.value;
        setUserInput(newInput);
    }
    return (
        <Row>
            <InputGroup>
                <FormControl
                    onChange={handleChange}
                    value={userInput}
                />
                <Button>Add</Button>
            </InputGroup>
        </Row>
    )
}

export default NewTask;