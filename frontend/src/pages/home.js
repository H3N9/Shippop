import React from 'react'
import styled from 'styled-components'
import Card from '../components/card'



const Home = () => {
    return (
        <> 
            <MainImage>

            </MainImage>

            <Title></Title>
                <Catgories>
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                </Catgories>

            <Title></Title>
                <Catgories>
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                    <Card book={{}} />
                </Catgories>
        </>
    )
}

const MainImage = styled.div`
    width: 100%;
    height: 500px;
    margin-bottom: 5vh;
    background-color: red;
`
const Title = styled.div`
    width: 100%;
    height: 50px;
    background-color: red;

`

const Catgories = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow-y: auto;
    display: flex;
    flex-direction: row;

`


export default Home