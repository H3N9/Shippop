import React from 'react'


const Card = ({book}) => {
    const {title = "", url = "", price = 0, discount = 0, rate = 0} = book


    return (
        <div className="boxCard">
            <div className="stateBox">

            </div>

            <div className="imageBox">

            </div>

            <div className="rateBox">

            </div>

            <div className="titleBox">

            </div>

            <div className="priceBox">

            </div>

            <div className="discountBox">

            </div>

        </div>
    )
}



export default Card