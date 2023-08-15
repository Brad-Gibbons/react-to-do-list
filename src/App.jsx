
import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm';
 
import './App.css';
import './index.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const [errorMessage, setErrorMessage] = useState('');
 
 const handleToggle = (id) => {
  let mapped = toDoList.map(task => {
    return task.id == id ? { ...task, complete: !task.complete } : { ...task};
  });
  console.log(id)
  setToDoList(mapped);
}
const handleDelete = () => {
  // if no tasks completed
  // checks to see some are complete 
  if(toDoList.some(e => e.complete === true)) {
    let deleted = toDoList.filter(task => {
      return !task.complete
    });
    setErrorMessage('')
    setToDoList(deleted);
    // if none complete, alert user 
  } else {
    setErrorMessage('Do something first!')
  }
}
const addTask = (item, prio) => {
  console.log(item)
  // copy data
  let copy = [...toDoList]
  // add new item to current data
  copy = [...copy, {id: toDoList.length + 1, task: item, complete: false, priority: prio}];
  setToDoList(copy)

}
const sortByPrio = () => {
  let copy = [...toDoList];
  let sortedList = copy.sort((a, b) => {
    return a.priority - b.priority
  })
  setToDoList(sortedList)
}
 return (
   <div className="App">
     <Header sortByPrio={sortByPrio}/>
     <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} errorMessage={errorMessage}/>
     <ToDoForm addTask={addTask}/>
   </div>
 );
}
 
export default App;