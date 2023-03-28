import React  from "react";
import imgone from "./image1.png"
import star from "./Star1.png"

function Card(){
    <div className="card">
        <img src={imgone} alt="cardimg" className="cardimage"/>
        <div className="cardstats">
                <img src={star} alt="staricon" className="cardimage"/>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
}

export default Card