import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "../style.css"
import useAvailable from '../hooks/isAvailable'

const Specific = () => {
    const rest_id = useParams()

    const [info, setInfo] = useState({})
    const [otherInfo, setOtherInfo] = useState()


    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        // const rest_id = 348417
        await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${rest_id.id}&submitAction=ENTER`).then((item) => {
            console.log(item, "data specific")
            setInfo(item.data.data.cards[0].card.card.info)
            setOtherInfo(item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            item?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(dish => console.log(dish?.card?.card?.itemCards?.map(specific => console.log(specific.card.info.name, "title"))))
        })
    }

    const available = useAvailable(info?.availability?.opened)
    return (
        <div className='specific-card'>
            <h2 className='specifc-heading'>{info?.name}</h2>
            <h2>{`Cuisines: ${info?.cuisines}`}</h2>
            <h2>{`Area: ${info?.areaName}`}</h2>
            <h2>{`Avg. Rating: ${info?.avgRating}`}</h2>
            <h2>{`Availability: ${available}`}</h2>

            {otherInfo?.map(dish => (
                // dish.card?.card?.itemCards?.map(specific => console.log(specific.card.info.name, "title"))
                <h2 className='additional' > {dish?.card?.card?.title}</h2>
            ))}
        </div >
    )
}

export default Specific
