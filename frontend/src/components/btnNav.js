import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {deviceJs} from '../tools/tools'
import '../styles/styleUniversal.css'


const BtnNav = ({title, link, main}) => {
    return (
        <BoxLink>
            <Link className={`btnLink ${main}`} to={`/${link}`}>{title}</Link>
        </BoxLink>
    )
}


const BoxLink = styled.div`
    width: 150px;
    height: 100px;
`



export default BtnNav