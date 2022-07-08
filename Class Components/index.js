import React from "react";
import ReactDOM  from "react-dom";

// function App (){
//   return(
//     <h1>We are in functional Component</h1>
//   )
// }

class App extends React.Component{
  render()
  {
    return(
      <h1>We are in class component</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
