import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Box9p, SpaceBox, Button} from '../styles/styleComponents'
import {useLocation} from 'react-router-dom'
import CatgoriesBooks from '../components/catgoriesBooks'
import {apiGateway} from '../tools/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookIcon from '../images/f.png'
import GoogleIcon from '../images/m.png'
import MailIcon from '../images/g.png'


const Detail = () => {
    const location = useLocation()
    const book = location?.state
    const {title = "", image = "", author = "", price = 0, discount = 0, publisher = "", catgories = "", type = "", code = "", description = ""} = book
    const [books, setBooks] = useState([])
    const url = "http://localhost:9000/books"
    const priceWdiscount = price-discount
    const [number, setNumber] = useState(0)

    useEffect(() => {
        apiGateway(url, setBooks)
    }, [])

    const handleNumber = (n, command) => {
        if("Decrease" === command && n > 0){
            setNumber(n-1)

        }
        else if("Increase" === command){
            setNumber(n+1)
        }
        console.log(n)
    }

    const renderSetupNum = (n) => {

        return (
            <PackNumber>
                <PackText>
                    {n}
                </PackText>
                <PackButton>
                    <IncreaseBox onClick={() => handleNumber(number, "Increase")} >
                        <FontAwesomeIcon icon={['fas', 'caret-up']} />
                    </IncreaseBox>
                    <DecreaseBox onClick={() => handleNumber(number, "Decrease")} >
                        <FontAwesomeIcon icon={['fas', 'caret-down']} />
                    </DecreaseBox>
                </PackButton>
            </PackNumber>
        )
    }

    const renderSplitText = (descript, index, arr) => {
        const last = arr.length
        if(index !== last){
            return (<React.Fragment key={index}><span >{descript}</span><br /></React.Fragment>)
        }
        else{
            return (<span key={index}>{descript}</span>)
        }
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

                        <PackHandle>
                            {renderSetupNum(number)}
                            <ButtonAdd>Add</ButtonAdd>
                            <ButtonWish>
                                <FontAwesomeIcon icon={['fas', 'heart']}/>
                                Wishlist
                            </ButtonWish>
                        </PackHandle>

                        <BoxShare>
                            <NormalDetailText>แชร์ : </NormalDetailText>
                            <ImageIcon src={MailIcon} />
                            <ImageIcon src={FacebookIcon} />
                            <ImageIcon src={GoogleIcon} />
                            
                        </BoxShare>
                        
                    </InfoBox>



                </DetailBox>
            </Box9p>

            <Box9p>

            </Box9p>
            <SpaceBox />
            <Underline />

            <SpaceBox />
            <Box9p>
                <Ptext>
                    {description.split('\n').map(renderSplitText)}
                </Ptext>
            </Box9p>
            <SpaceBox />
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
    margin-top: 50px;
`
const ImageBox = styled.div`
    width: clamp(500px, 40%, 1000px);
    background-color: red;
`

const InfoBox = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: clamp(500px, 60%, 1980px);
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
    flex-shrink: 0;
    width: 150px;
    height: 55px;
    overflow: hidden;
    border-radius: 10px;
    background-color: #cccccc;
    margin: 20px;
    
`
const PackText = styled.div`
    width: 80%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PackButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    background-color: transparent;
`
const DecreaseBox = styled.div`
    width: 100%;
    height: 50%;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        background-color: #adacac
    }

`
const IncreaseBox = styled.div`
    width: 100%;
    height: 50%;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    :hover{
        background-color: #adacac
    }
`
const ButtonAdd = styled(Button)`
    background-color: #003cff;
    border: solid 2px #003cff;
    color: white;
    width: 230px;
    margin: 20px;
    :hover{
        background-color: white;
        color: #003cff;
    }
`
const ButtonWish = styled(Button)`
    background-color: #ff9010;
    border: solid 2px #ff9010;
    color: white;
    width: 230px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :hover{
        background-color: white;
        color: #ff9010;
    }
`
const BoxShare = styled.div`
    width: 90%;
    padding: 0 5% 0 5%;
    display: flex;
    margin-top: 100px;
    align-items: center;
`

const PackHandle = styled.div`
    display: flex;
    width: 90%;
    padding: 0 5% 0 5%;
    flex-wrap: wrap;

`

const ImageIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px 0 10px;
`

const Underline = styled.div`
    width: 100%;
    height: 3px;
    background-color: gray;
`

const Ptext = styled.p`
    margin: 0;

`


export default Detail