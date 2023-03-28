import React  from "react";
import imgone from "./image1.png"
import star from "./Star1.png"

function Card(props) {
    console.log(props)
    return(

        <div className="card">
        <img src={imgone} alt="cardimg" className="cardimage"/>
        <div className="cardstats">
                <img src={star} alt="staricon" className="cardstar"/>
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount} • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
        )
}

export default Card