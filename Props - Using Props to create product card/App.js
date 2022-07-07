import React from "react";

import Product from "./Product";

const App = () => {
    return(
        <div>
        <Product 
        imgUrl="https://static.zara.net/photos///2022/V/0/1/p/8197/231/400/2/w/1126/8197231400_6_1_1.jpg?ts=1646738706507"
        name = "Tailored Jeans"
        price = "Rs. 500"
        discription ="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum. "
        />
        <Product 
        imgUrl="https://image.uniqlo.com/UQ/ST3/in/imagesgoods/448428/item/ingoods_64_448428.jpg?width=1008&impolicy=quality_75"
        name = "Tailored Jeans"
        price = "Rs. 500"
        discription ="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum. "
        />
        <Product 
        imgUrl="https://images.wsj.net/im-483252?width=860&height=573"
        name = "Tailored Jeans"
        price = "Rs. 500"
        discription ="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum. "
        />
        <Product 
        imgUrl="https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2018/02/1140-llj-jeans-bootcuts.jpg"
        name = "Tailored Jeans"
        price = "Rs. 500"
        discription ="Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum. "
        />
        </div>
        
    )
}

export default App