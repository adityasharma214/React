import React from "react";
import Product from "./Product";
import Product_list from "./Product_list"


const App = () =>{


    const product_list_array = Product_list.map(item => <Product key={item.id} product_name = {item.product_name} discription = {item.discription}/>)
    return(
        <div>
            {product_list_array}
        </div>
    )
}

export default App