import React from "react"
import Heroimg from "./heroimg.png"

function Hero() {
    return(
        <section className="hero">
        <img src={Heroimg} alt="heroimg" className="heroimg"/>
        <h1 className="heroheader">Online Experiences</h1>
            <p className="herotext">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero