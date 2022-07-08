import React from "react";

import Product from "./Product";
import Product_list from "./Product_list"

const App = () => {

    const productsitem = Product_list.map
    (item => 
    <Product 
        imgUrl = {item.imgUrl} 
        name = {item.name} 
        price = {item.price} 
        discription = {item.discription} 
    />
    )
    return(
        <div>
        {productsitem}
        </div>
        
    )
}

export default App