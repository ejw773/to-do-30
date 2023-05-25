import React, { useState } from 'react';
import Navbar from './NavComponent'
import NewItem from './NewItemComponent'
import ItemList from './ItemListComponent'
import Footer from './FooterComponent'

const Main = () => {
  const [allToDos, setAllToDos] = useState([]);
  const addToDo = (userInput) => {
    setAllToDos((prev => {
      return [...prev, userInput]
    }));
  }
  return (
    <>
      <Navbar />
      <NewItem addToDo={addToDo} />
      <ItemList allToDos={allToDos} />
      <Footer />
    </>
  )
}

export default Main;