import React from "react";
import Joke from "./Joke"

const App = () => {
    return(
            <div>
                <Joke 
                
                discription = "We are learing the React Basics"/>
                <Joke
                 
                 name = "Aditya Oswal"
                 discription = "We are learing the Angular Basics"/>
 
                <Joke 
                name = "Prantik Saha"
                discription = "We are learing the Node.js Basics"/>

                <Joke name = "Jayant Choudhary"
                discription = "We are learing AWS Advance"/>

            </div>
    )
}

export default App