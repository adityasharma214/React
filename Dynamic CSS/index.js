import React from "react";
import ReactDOM  from "react-dom";

const styles = {
    
}
const App = () =>
{
    const date = new Date(2022, 6, 30, 10)
    const hour = date.getHours()
    let timeofday

    if (hour < 12) {
        timeofday = "Morning"
        styles.color = "#04756F"
    
        
    } else if (hour >= 12 && hour < 12){
        timeofday = "Noon"
        styles.color = "#8914A3" 

    } else if(hour >15 && hour < 19){
        timeofday = "Evening"
        styles.color = "#F32931"
    } else{
        timeofday = "Night"
        styles.color = "#FE2002"
    }

return (
    <h1 style={styles}>Good {timeofday}!</h1>
)
}
ReactDOM.render(<App />, document.getElementById("root"))
