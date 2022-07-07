import React from "react";

const Joke = (props) => {
    return(
        <div>
            <h1 style={{display: !props.name  &&  "none"}}>Name : {props.name}</h1>
            <p style={{color: !props.name && "#FF0000"}}>Discription: {props.discription}</p>
            <hr />
        </div>
        )
}

export default Joke
