import React from "react";
import Joke from "./Joke"
import StudentData from "./StudentData";


const App = () => {

  const studentcomponents = StudentData.map(student => <Joke stu_name = {student.stu_name} discription = {student.discription} />)

return(
    <div>{studentcomponents}</div>
)
}
export default App