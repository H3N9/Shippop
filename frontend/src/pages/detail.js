import React from 'react'
import styled from 'styled-components'
import {Title, Catgories, Box9p} from '../styles/styleComponents'
import Card from '../components/card'


const Detail = () => {


    return (
        <>
            <Box9p>
                <DetailBox>
                    <ImageBox>

                    </ImageBox>


                    <InfoBox>
                        <NormalStyle>sss</NormalStyle>
                    </InfoBox>



                </DetailBox>
            </Box9p>

            <Box9p>
                <Title>

                </Title>
                <Catgories>
                        <Card book={{}} />
                        <Card book={{}} />
                        <Card book={{}} />
                        <Card book={{}} />
                        <Card book={{}} />
                        <Card book={{}} />
                        <Card book={{}} />
                </Catgories>
            </Box9p>
            
        </>
    )
}

const NormalStyle = styled.div`
    width: 90%;
    padding: 5%;
`

const DetailBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const ImageBox = styled.div`
    width: clamp(500px, 50%, 1000px);
    height: 100vh;
    background-color: red;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: clamp(320px, 50%, 1980px);
    height: 100vh;
    background-color: blue;
`
const TitleBook = styled(NormalStyle)`
    

`

export default Detail