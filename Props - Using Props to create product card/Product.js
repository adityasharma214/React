import React from "react";
import "./styles.css"

const styles = {
    margin: "20px auto 30px",
    width: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0"
}
const Product = (props) => {
    return(
        <div className="card">
             <img src={props.imgUrl} style={styles} alt="Denim Jeans"/>
             <h1>{props.name}</h1>
             <p className="price">{props.price}</p>
             <p>{props.discription}</p>
             
        </div>
    )
}

export default Product