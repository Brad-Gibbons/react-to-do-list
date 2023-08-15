import React from "react";

const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.id)
        handleToggle(e.currentTarget.id)
    }
    return (
        <div  className={todo.complete ? "strike": ""} id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id}  onClick={handleClick}>
            <p>{todo.task} - {todo.priority}</p>
        </div>
    )
}

export default ToDo