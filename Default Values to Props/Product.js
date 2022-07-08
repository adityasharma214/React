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
             <img src={props.imgUrl ||  "https://www.tharagold.in/assets/img/no-product-found.png"} style={styles} alt="Denim Jeans"/>
             <h1>{props.name || "Unable to fetch the Price"}</h1>
             <p className="price">{props.price || "Price Unavailable"}</p>
             <p>{props.discription || "We are unable to fetch the Discription at this moment."}</p>
             <button type="{submit}">Click</button>
             
        </div>
    )
}

export default Product