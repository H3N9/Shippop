import React from 'react'
import styled from 'styled-components'
import stlyed from 'styled-components'


const CardCart = ({book}) => {
    const {image, title, price, discount} = book
    const priceWdiscount = price-discount

    return (
        <CardCartBox>
            <ImageTitleBox>
                <ImageBox>
                    <Image src={image} />
                </ImageBox>
                <TitleBox>
                    {title}
                </TitleBox>
            </ImageTitleBox>
            <TextBox>
                {`THB${priceWdiscount.toFixed(2)}`}
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
    width: 100%;
`



export default CardCart