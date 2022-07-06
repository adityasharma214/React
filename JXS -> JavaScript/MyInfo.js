import React from "react"

function MyInfo()
{
    const firstName = "Aditya"
    const lastName = "Sharma"
    return(
        <div>
            <h1>Hello! {firstName + " " + lastName }</h1>
            <p>Hello, I am {firstName + " " + lastName } and we are learning React!</p>
            <ul>
                <li>Kedarnath</li>
                <li>Manali</li>
                <li>Leh Ladak</li>
            </ul>

        </div>
        
    )
}

export default MyInfo
