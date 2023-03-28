import React from "react"
import logo from "./airbnb.png"


function Navbar(){
    return(
        <nav>
           <img src={logo} alt="logo" className="navlogo"/>

        </nav>
    )
}

export default Navbar