import React from "react"
import ReactDOM from "react-dom"

function Unorderlist()
{
    return (

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        
    </ul>
    )
}
ReactDOM.render(
    <Unorderlist />, 
    document.getElementById("root")
    )
