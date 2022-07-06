import React from "react";
import MyInfo from "./MyInfo";
import Header from "./Header";
import Mainbody from "./Mainbody"
import Footer from "./Footer";
import "./style.css"

function App(){
    return(
    <div>
        <Header />
        <Mainbody />
        <MyInfo />
        <Footer />
    </div>


    )
}

export default App