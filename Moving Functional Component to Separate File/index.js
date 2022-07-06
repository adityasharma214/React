//Create a functional component called MyInfo that returns the following UI:
// a. An hi with your name
// b. A paragraph with a little blurb about yourself 
// c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// Render an instance of that functional component to the browser
import React from "react";
import ReactDOM  from "react-dom";
import MyInfo from "./MyInfo"

ReactDOM.render(<MyInfo />, document.getElementById("root"))


// Things to remember -
// impoet the component used in to render the jxs.
