import "./App.css";
import { useState } from "react";

// React components always start with capital letter
// function based component

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,  
      taskName: newTask,
    }
    // const newTodoList = ; just put the value directly in setTodoList
    setTodoList([...todoList, task]);
    
  };

  const deleteTask = (id) => {
   // const newTodoList do it directly in setTodoList
    setTodoList(todoList.filter((task) =>  task.id !== id));
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange = {handleChange}/>
        <button onClick = {addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return( <div>
            <h1>{task.taskName}</h1>
            <button onClick = {() => deleteTask(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
