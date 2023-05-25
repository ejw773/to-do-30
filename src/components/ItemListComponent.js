import React from 'react';

const ItemList = ({ allToDos }) => {
  console.log(allToDos)
  return (
    <div>
      {allToDos.map((toDo, index) => {
        return (
          <div key={index}>
            <h3>{toDo}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList;