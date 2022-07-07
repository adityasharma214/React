import React from "react";

const Product = (props) => {
    return(
        <div>
            <h1>{props.product_name}</h1>
            <p>{props.discription}</p>
        </div>
    )
} 

export default Product