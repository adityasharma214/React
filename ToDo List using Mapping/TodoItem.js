import React from "react";

const TodoItem = (props) =>{
    return(
        <div className="todo-item"> 
            <input type={"checkbox"}></input>
            <p>{props.product_name}</p>
        </div>
    )
}


export default TodoItem