import React from "react";

const Joke = (props) => {
    return(
        <div>
            <h1 style={{display: !props.stu_name  &&  "none"}}>Name : {props.stu_name}</h1>
            <p style={{color: !props.stu_name && "#FF0000"}}>Discription: {props.discription}</p>
            <hr/> 
        </div>
        )
}

export default Joke