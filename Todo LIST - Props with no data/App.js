import React from "react";
import TodoItem from "./TodoItem";
import Product_list from "./Product_list";
import "./styles.css"

const App = () => {

    const todolist = Product_list.map(item => <TodoItem product_name = {item.product_name} product_condition = {item.condition}/>)
    return(
        <div className="todo-list">
            {todolist}
        </div>
        
    )
}


export default App