import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


const NewItem = () => {
    const [formInput, setFormInput] = useState('');

    const handleChange = ({target}) => {
        let newInput = target.value;
        setFormInput(prev => newInput)
    }
    const handleClick = () => {
        
    }
    return (
        <div className='m-3'>
            <InputGroup className='mb-3'>
                <FormControl 
                    placeholder='Enter New Task'
                    aria-label='Enter New Task'
                    aria-describedby='basic-addon2'
                    value={formInput}
                    onChange={handleChange}
                />
                <Button variant="success" id="button-addon2" onClick={handleClick}>
                    Add Task
                </Button>
            </InputGroup>
        </div>
    )
}

export default NewItem;
