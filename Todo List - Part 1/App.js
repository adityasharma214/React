import React from "react";
import TodoItem from "./TodoItem";
import "./styles.css"

const App = () => {
    return(
        <div className="todo-list">
            <h1>Todo List</h1>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
        
    )
}


export default App