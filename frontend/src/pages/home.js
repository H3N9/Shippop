import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import {Title, Box9p, TitleText} from '../styles/styleComponents'
import {apiGateway} from '../tools/tools'
import CatgoriesBooks from '../components/catgoriesBooks'



const Home = () => {
    const [books, setBooks] = useState([])
    const url = "http://localhost:9000/books"

    useEffect(() => {
        apiGateway(url, setBooks)
    }, [])

    return (
        <Box9p> 
            <MainImage>

            </MainImage>

            <CatgoriesBooks books={books} title={"สินค้าใหม่"}/>
            <CatgoriesBooks books={books} title={"สินค้าแนะนำ"}/>
        </Box9p>
    )
}

const MainImage = styled.div`
    width: 100%;
    height: 500px;
    margin-bottom: 5vh;
    background-color: red;
`


export default Home