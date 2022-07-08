import React from "react";

const TodoItem = (props) => {

    return(
        <div className="todo-item"> 
            <input style={{}} type={"checkbox"}></input>
            <input style={{display: !props.product_name  &&  "none"}} type= "checkbox" checked={props.product_condition}></input>
            <p style={{display: !props.product_name  &&  "none"}}>{props.product_name}</p>
        </div>
    )
    }

export default TodoItem