import React from "react";
import ReactDOM  from "react-dom";


const App = () =>
{
    const date = new Date()
    const hour = date.getHours()
    let timeofday

    if (hour < 12) {
        timeofday = "Morning"
    
        
    } else if (hour >= 12 && hour < 12){
        timeofday = "Noon"

    } else if(hour >15 && hour < 19){
        timeofday = "Evening"
    } else{
        timeofday = "Night"
    }
const styles = {
    color: "#FF0000", 
    background: "#000000"
}
return (
    <h1 style={styles}>Good {timeofday}!</h1>
)
}
ReactDOM.render(<App />, document.getElementById("root"))
