import React from 'react'
import { Link } from 'react-router-dom'


const BtnNav = ({title, link, main}) => {
    return (
        <div className="BoxLink">
            <Link className={`btnLink ${main}`} to={`/${link}`}>{title}</Link>
        </div>
    )
}



export default BtnNav