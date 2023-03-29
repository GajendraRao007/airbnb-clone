import React  from "react";
import imgone from "./image1.png"
import star from "./Star1.png"
// import img2 from "./img2.png"
// import img3 from "./img3.png"

function Card(props) {
    console.log(props)
    return(

        <div className="card">
      {/* {! props.openSpots && <div className="card--badge">SOLD OUT</div>} */}
     {/* <img src={`../images/${props.item.coverImg}`}className="cardimage" /> */}
     <img src={imgone}className="cardimage" />

        <div className="cardstats">
                <img src={star} alt="staricon" className="cardstar"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
        )
}

export default Card