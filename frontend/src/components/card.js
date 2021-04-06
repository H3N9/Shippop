import React from 'react'
import styled from 'styled-components'


const Card = ({book}) => {
    const {title = "", url = "", price = 0, discount = 0, rate = 0} = book


    return (
        <BoxCard>
            <StateGoods>

            </StateGoods>

            <ImageBox>

            </ImageBox>

            <RateBox>

            </RateBox>

            <TitleBox>

            </TitleBox>

            <PriceBox>

            </PriceBox>

            <DiscountBox>

            </DiscountBox>

        </BoxCard>
    )
}

const Box = styled.div`
    display: flex;
    width: 100%;
`

const BoxCard = styled.div`
    display: flex;
    width: 300px;
    height: 340px;
    overflow: hidden;
    flex-direction: column;
    flex-shrink: 0;
    transition: 0.5s;
    :hover{
        box-shadow: 0.2vw 0.2vw 0.8vw #aaaaaa;
        z-index: 2;
        transform: scaleY(1.3);

    }
`

const StateGoods = styled.div`
    background: red;
    height: 5%;
    
`

const ImageBox = styled(Box)`
    height: 40%;
    background: blue;
    
`

const RateBox = styled(Box)`
    background: red;
    height: 5%;
`

const TitleBox = styled(Box)`
    background: blue;
    height: 5%;
`

const PriceBox = styled(Box)`
    background: red;
    height: 10%;
`

const DiscountBox = styled(Box)`
    background: blue;
    height: 15%;
`



export default Card