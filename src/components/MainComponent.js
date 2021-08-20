import React, { useState, useEffect } from 'react';

const Main = () => {
    const [categoryList, setCategoryList] = useState(['Office', 'Home', 'Inbox', 'Shopping']);
    const [taskList, setTaskList] = useState([
        {
            id: 0,
            name: 'Clean up desk',
            category: 'Office',
            complete: false
        },
        {
            id: 2,
            name: 'Change spark plugs',
            category: 'Home',
            complete: false
        },
        {
            id: 10
        }
    ])
    return (
        <div>
            Main
        </div>
    )
}

export default Main;
