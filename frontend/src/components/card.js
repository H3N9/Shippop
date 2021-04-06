import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Card = ({book}) => {
    const {title = "", image = "", price = 0, discount = 0, rate = 0} = book
    const quantity = book?.quantity > 0 ? true:false

    const rateHandle = (rates) => {
        const amount = rates.length
        if(amount > 0){
            const star = rates.reduce((value_1, value_2) => value_1+value_2)/amount
            return(
                <PackStar>
                    {rederStar(star-1, 1)}
                    {rederStar(star-2, 2)}
                    {rederStar(star-3, 3)}
                    {rederStar(star-4, 4)}
                    {rederStar(star-5, 5)}
                </PackStar>
            )
        }
        
    }

    const rederStar = (rate, key) => {
        if(rate >= 1) {
            return <FontAwesomeIcon key={key} icon={['fas', 'star']}  />
        }
        else if(rate > 0.5){
            return <FontAwesomeIcon key={key} icon={['fas', 'star']}  />
        }
        else {
            return <FontAwesomeIcon key={key} icon={['far', 'star']}  />
        }
    }


    return (
        <Link to="/detail" style={{textDecoration: "none"}}>
            <BoxCard>
                <StateGoods>
                    {quantity? "มีสินค้า":"ไม่มีสินค้า"}
                </StateGoods>

                <ImageBox>
                    <Image src={image} />
                </ImageBox>

                <RateBox>
                    {rateHandle(rate)}
                </RateBox>

                <AddCart>

                </AddCart>

                <TitleBox>

                </TitleBox>

                <PriceBox>

                </PriceBox>

                <DiscountBox>

                </DiscountBox>

            </BoxCard>
        </Link>
    )
}

const Box = styled.div`
    display: flex;
    width: 100%;
`
const AddCart = styled.div`
    display: none;
    width: 100%;
    height: 10%;

`

const BoxCard = styled.div`
    display: flex;
    width: 300px;
    height: 400px;
    overflow: hidden;
    flex-direction: column;
    flex-shrink: 0;
    transition: 0.5s;
    :hover{
        box-shadow: 0vw 0vw 1vw rgba(0,0,0,0.8);

    }
    :hover ${AddCart} {
        display: block;
    }
`

const PackStar = styled.div`
    display: flex;
    align-items: center;
`

const StateGoods = styled.div`
    background: red;
    height: 7%;
    
`

const ImageBox = styled.div`
    height: 54%;
    background: white;
    padding: 0 5% 0 5%;
    justify-content: center;
    display: flex;
    
`
const Image = styled.img`
    object-fit: cover;
    height: 100%;
`

const RateBox = styled(Box)`
    background: red;
    height: 7%;
`

const TitleBox = styled(Box)`
    background: blue;
    height: 7%;
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