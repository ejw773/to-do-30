import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


const NewItem = ({addTask}) => {
    const [formInput, setFormInput] = useState('');

    const handleChange = ({target}) => {
        let newInput = target.value;
        setFormInput(newInput)
    }
    const handleClick = () => {
        if (formInput !== '') {
            addTask(formInput);
            setFormInput('')
        }
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
                    onKeyPress={event => {if(event.key === 'Enter') {handleClick()}}}
                />
                <Button variant="success" id="button-addon2" onClick={handleClick}>
                    Add Task
                </Button>
            </InputGroup>
        </div>
    )
}

export default NewItem;
