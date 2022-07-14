import React from "react";
import TodoItem from "./TodoItem";
import Todolist from "./Todolist";
import "./styles.css"

const App = () => {

    const todolist = Todolist.map(item => <TodoItem product_name = {item.product_name} product_condition = {item.condition}/>)
    return(
        <div className="todo-list">
            <input style={{}} type={"checkbox"}></input>
            <h2>Select All</h2>
            {todolist}
        </div>
        
    )
}


export default App