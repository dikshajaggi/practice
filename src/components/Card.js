import React from 'react'
import "../style.css"

const Card = (props) => {
    console.log(props, "props card")
    const { name, costForTwoString, cuisines, deliveryTime, cloudinaryImageId, avgRating, aggregatedDiscountInfo } = props
    return (
        // <div className='card'>
        //     <img className="pizzaImg" src={props.info.img} />
        //     <h4>{props.info.name}</h4>
        //     <h6>{props.info.desc}</h6>
        //     <h6>{props.info.size.join(" , ")}</h6>
        // </div>
        <div className='card'>
            <img className="pizzaImg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h4 className='text-light'>{cuisines.join(" , ")}</h4>
            <div className="info-row border-bottom">
                <h4>{`${deliveryTime} MINS`}</h4>
                <h4>|</h4>
                <h4><i class="fa-regular fa-star"></i>{avgRating}</h4>
                <h4>|</h4>
                <h4>{costForTwoString}</h4>
            </div>
            <h3 className="text-center">{aggregatedDiscountInfo.header}</h3>
        </div>
    )
}

export default Card
