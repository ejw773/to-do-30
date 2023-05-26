import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Header from './HeaderComponent';
import Main from './MainComponent';
import Footer from './FooterComponent';

const App = () => {
  const [toDoList, setToDoList] = useState([
    {
      name: 'write a react app',
      status: false,
      id: 0
    },
    {
      name: 'deploy a react app',
      status: false,
      id: 1
    },
    {
      name: 'eat breakfast',
      status: true,
      id: 2
    }
  ]);

  const makeNewId = () => {
    let newId = 0;
    if (toDoList.length >= 1) {
      let allIds = toDoList.map((item) => item.id);
      console.log(allIds);
      newId = Math.max(...allIds) + 1;
    }
    return newId;
  }

  const addToDo = (newToDo) => {
    let newId = makeNewId();
    let newToDoObject = {
      name: newToDo,
      status: false,
      id: newId,
    }
    let updatedToDoList = [...toDoList, newToDoObject]
    setToDoList(updatedToDoList);
  } 

  const deleteToDo = (id) => {
    const newList = toDoList.filter((item) => item.id != id)
    setToDoList(newList);
  }

  const toggleToDo = (id) => {
    const updatedList = [...toDoList];
    let targetIndex = updatedList.findIndex((item) => item.id == id);
    updatedList[targetIndex].status = !updatedList[targetIndex].status;
    setToDoList(updatedList);
  }

  return (
    <>
      <Header />
      <Row className="m-3">
        <Main toDoList={toDoList} addToDo={addToDo} deleteToDo={deleteToDo} toggleToDo={toggleToDo} />
      </Row>
      <Footer />
    </>
  )
}

export default App;