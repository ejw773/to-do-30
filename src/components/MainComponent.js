import React from 'react';
import ItemList from './ItemListComponent';
import NewItem from './NewItemComponent';

const Main = () => {
    return (
        <div>
            <h1>To Do App Challenge: Day 1</h1>
            <NewItem />
            <ItemList />
        </div>
        )
}

export default Main;