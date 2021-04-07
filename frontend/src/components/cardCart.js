import React from 'react'
import styled from 'styled-components'
import stlyed from 'styled-components'


const CardCart = ({book}) => {
    const {image, title, price, discount} = book

    return (
        <CardCartBox>
            <ImageTitleBox>
                <ImageBox>

                </ImageBox>
                <TitleBox>

                </TitleBox>
            </ImageTitleBox>
            <TextBox>

            </TextBox>
            <TextBox>
                
            </TextBox>
            <TextBox>
                
            </TextBox>
        </CardCartBox>
    )

}

const CardCartBox = styled.div`
    width: 100%;
    display: flex;
    height: 300px;
    margin: 5px;

`
const ImageTitleBox = styled.div`
    width: 40%;
    display: flex;

`
const TextBox = styled.div`
    width: 20%;
    
`
const TitleBox = styled.div`
    width: 60%;
    
`
const ImageBox = styled.div`
    width: 40%;
    
`

const Image = styled.img`
    height: 100%;
`



export default CardCart