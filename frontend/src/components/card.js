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
    overflow: hidden;
    flex-direction: column;
`

const StateGoods = styled.div`
    background: red;
    height: 20px;
    
`

const ImageBox = styled(Box)`
    height: 150px;
    background: blue;
    
`

const RateBox = styled(Box)`
    background: red;
    height: 20px;
`

const TitleBox = styled(Box)`
    background: blue;
    height: 20px;
`

const PriceBox = styled(Box)`
    background: red;
    height: 50px;
`

const DiscountBox = styled(Box)`
    background: blue;
    height: 80px;
`



export default Card