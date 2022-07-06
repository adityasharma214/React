//Create a functional component called MyInfo that returns the following UI:
// a. An hi with your name
// b. A paragraph with a little blurb about yourself 
// c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// Render an instance of that functional component to the browser
import React from "react";
import ReactDOM  from "react-dom";

function MyInfo()
{
    return(
        <div>
            <h1>Aditya Sharma</h1>
            <p>Hello, I am aditya sharma and we are learning React!</p>
            <ul>
                <li>Kedarnath</li>
                <li>Manali</li>
                <li>Leh Ladak</li>
            </ul>

        </div>
        
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))
