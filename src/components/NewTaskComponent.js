import React from 'react';
import InputGroup from  'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const NewTask = ({addTask}) => {
    return (
        <Row className='m-3'>
            <InputGroup>
                <FormControl 
                    placeholder='Enter a New Task'
                    aria-label='New Task'
                />
                <Button bg='light' variant='light'>+</Button>
            </InputGroup>
        </Row>
    )
}

export default NewTask;