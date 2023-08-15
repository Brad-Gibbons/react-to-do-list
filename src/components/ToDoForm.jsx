import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');
    const [userPrio, setUserPrio] = useState(0);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    const handlePrioChange = (e) => {
        setUserPrio(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput, userPrio)
        setUserInput('')
        setUserPrio('')
        let field = document.getElementById('textInput');
        console.log(field)
        field.focus()

    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task..." autoFocus="autofocus" value={userInput} onChange={handleChange} id="textInput"/>
        <input type="number" placeholder="Priority (1 being most important)" value={userPrio}  min='1' max='10'onChange={handlePrioChange} />
        <button>Submit</button>
        </form>
        
    )
}

export default ToDoForm