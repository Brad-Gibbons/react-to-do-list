import React, { useState } from "react";
import ToDo from "./toDo";

const ToDoList = ({ toDoList, errorMessage, handleToggle, handleDelete }) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle}/>
                )
            })}
            <button onClick={handleDelete}>Clear items</button>
            <p>{errorMessage}</p>
        </div>
    )
}

export default ToDoList;