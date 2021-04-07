import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Box9p, SpaceBox} from '../styles/styleComponents'
import {useLocation} from 'react-router-dom'
import CatgoriesBooks from '../components/catgoriesBooks'
import {apiGateway} from '../tools/tools'


const Detail = () => {
    const location = useLocation()
    const book = location?.state
    const {title = "", image = "", author = "", price = 0, discount = 0, publisher = "", catgories = "", type = "", code = ""} = book
    const [books, setBooks] = useState([])
    const url = "http://localhost:9000/books"
    const priceWdiscount = price-discount
    const [number, setNumber] = useState(10000000)

    useEffect(() => {
        apiGateway(url, setBooks)
    }, [])

    const renderSetupNum = (n) => {

        return (
            <PackNumber>
                <PackText>
                    {n}
                </PackText>
                <PackButton>
                    <IncreaseBox />
                    <DecreaseBox />
                </PackButton>
            </PackNumber>
        )
    }

    return (
        <>
            <SpaceBox />
            <Box9p>
                <DetailBox>
                    <ImageBox>

                    </ImageBox>


                    <InfoBox>
                        <TitleDetial>
                            <TitleDetialText>{title}</TitleDetialText>
                        </TitleDetial>

                        <NormalDetailBox>
                            <NormalDetailText>ผู้เขียน : {author}</NormalDetailText>
                        </NormalDetailBox>

                        <NormalDetailBox>
                            <NormalDetailText>สำนักพิมพ์ : {publisher}</NormalDetailText>
                        </NormalDetailBox>

                        <NormalDetailBox>
                            <NormalDetailText>หมวดหมู่ : {catgories}</NormalDetailText>
                        </NormalDetailBox>
                            
                        <NormalDetailBox>
                            <NormalDetailText>ประเภทของสินค้า : {type}</NormalDetailText>
                        </NormalDetailBox>

                        <NormalDetailBox>
                            <NormalDetailText>บาร์โค้ด : {code}</NormalDetailText>
                        </NormalDetailBox>

                        <PriceBox>
                            <PriceTitle>ราคา</PriceTitle>
                            <PriceText>THB{priceWdiscount.toFixed(2)}</PriceText>
                            {discount? <PriceDiscountText>THB{price.toFixed(2)}</PriceDiscountText>:""}
                        </PriceBox>
                        {renderSetupNum(number)}

                    </InfoBox>



                </DetailBox>
            </Box9p>

            <Box9p>
                <CatgoriesBooks books={books} title={"สินค้าที่เกี่ยวข้อง"} />
            </Box9p>
            
        </>
    )
}

const TitleDetial = styled.div`
    width: 90%;
    padding: 5%;
`
const TitleDetialText = styled.h1`
    margin: 0;
    font-size: 3em;
`
const NormalDetailBox = styled.div`
    width: 90%;
    padding: 0% 5% 3% 5%;
    background-color: white;
`
const NormalDetailText = styled.h3`
    margin: 0;
    font-size: 1.3em;
`

const DetailBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const ImageBox = styled.div`
    width: clamp(500px, 40%, 1000px);
    height: 80vh;
    background-color: red;
`

const InfoBox = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: clamp(500px, 60%, 1980px);
    height: 80vh;
    background-color: white;
`

const PriceBox = styled.div`
    padding: 5%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const PriceText = styled.h1`
    margin: 0;
    font-size: clamp(16px, 4em, 10vw);
    margin-right: 30px;
    
`
const PriceTitle = styled.h2`
    margin: 0;
    font-size: clamp(14px, 3em, 8vw);
    margin-right: 70px;
`

const PriceDiscountText = styled.h2`
    text-decoration: line-through;
    margin: 0;
    font-size: clamp(14px, 1.8em, 8vw);
    color: gray;
`

const PackNumber = styled.div`
    display: flex;
    width: 150px;
    height: 55px;
    overflow: hidden;
    
`
const PackText = styled.div`
    width: 80%;
    height: 100%;
    background-color: blue;
`
const PackButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    background-color: red;
`
const DecreaseBox = styled.div`
    width: 100%;
    height: 50%;
    background-color: red;

`
const IncreaseBox = styled.div`
    width: 100%;
    height: 50%;
    background-color: yellow;
`

export default Detail