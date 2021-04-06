import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import {Title, Catgories, Box9p} from '../styles/styleComponents'
import {apiGateway} from '../tools/tools'



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

            <Title></Title>
                <Catgories>
                    {books.map((book) => (<Card book={book} />))}
                </Catgories>

            <Title></Title>
                <Catgories>
                    {books.map((book) => (<Card book={book} />))}
                </Catgories>
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