import React from 'react';
import RenderListItems from './RenderListItemsComponent';

const ItemList = ({allToDos}) => {
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
