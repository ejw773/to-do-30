import React, { useState } from 'react';
import InputGroup from  'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const NewTask = ({addTask}) => {
    const [userInput, setUserInput] = useState('');
    const handleChange = ({target}) => {
        let newInput = target.value
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
        <Row className='m-3 justify-content-center'>
            <Col className='col-sm-10'>
                <InputGroup>
                <Button bg='light' variant='light' onClick={handleClick}><FontAwesomeIcon icon={faPlus} /></Button>
                <FormControl 
                    placeholder='Enter a New Task'
                    onChange={handleChange}
                    value={userInput}
                    onKeyPress={handleKeyPress}
                />
                </InputGroup>
            </Col>
        </Row>
    )
}

export default NewTask;