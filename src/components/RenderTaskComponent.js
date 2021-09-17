import React from 'react';

const RenderTask = ({task}) => {
    const handleChange = ({target}) => {
        console.log(target.value)
    }
    return (
        <div>
            <button>&#10004;</button>
            <input 
                value={task.name}
                onChange={handleChange}
            />
           <button>Delete</button>
        </div>
    )
}

export default RenderTask;