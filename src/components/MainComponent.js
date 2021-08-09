import React, { useState } from 'react';
import ItemList from './ItemListComponent';
import NewItem from './NewItemComponent';
import Footer from './FooterComponent'

const Main = () => {
    const [allToDos, setAllToDos] = useState([]);
    const addToDo = (userInput) => {
        console.log(allToDos);
        setAllToDos((prev) => {
            return [...prev, userInput]
        });
        console.log(allToDos);
    }
    return (
        <div>
            <h1>To Do App Challenge: Day 1</h1>
            <NewItem addToDo={addToDo}/>
            <ItemList allToDos={allToDos}/>
            <Footer />
        </div>
        )
}

export default Main;