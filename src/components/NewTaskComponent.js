import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewTask = ({addTask}) => {
    const [textInput, setTextInput] = useState('');
    const handleChange = ({target}) => {
        setTextInput(target.value);
    }
    const handleKeyPress = ({key}) => {
        if (textInput !== '') {
            if (key === 'Enter') {
                addTask(textInput);
                setTextInput('');
            }
        }
    }
    return (
        <FormControl variant='outlined' className='new-task'>
            <TextField id='new-task' label='New' variant='outlined' value={textInput} onChange={handleChange} onKeyPress={handleKeyPress} />
        </FormControl>
    )
} 

export default NewTask;