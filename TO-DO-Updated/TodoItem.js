import React from "react";

const TodoItem = (props) => {

    return(
        <div className="todo-item"> 

            <input style={{display: !props.product_name  &&  "none"}} type= "checkbox"></input>
            <p style={{display: !props.product_name  &&  "none"}}>{props.product_name}</p>
        </div>
    )
    }

export default TodoItem



