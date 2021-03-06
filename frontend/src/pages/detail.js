import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Box9p, SpaceBox, Button} from '../styles/styleComponents'
import {useLocation} from 'react-router-dom'
import CatgoriesBooks from '../components/catgoriesBooks'
import {apiGateway} from '../tools/tools'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookIcon from '../images/facebook.png'
import GoogleIcon from '../images/google-plus.png'
import { useOrderContext } from './index'
import UpNumber from '../components/upNumber'


const Detail = () => {
    const location = useLocation()
    const book = location?.state
    const {title = "", image = "", author = "", price = 0, discount = 0, publisher = "", catgories = "", type = "", code = "", description = ""} = book
    const [books, setBooks] = useState([])
    const url = "http://localhost:9000/books"
    const priceWdiscount = price-discount
    const [number, setNumber] = useState(0)
    const { addOrder } = useOrderContext()

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
                        <MainImageBox>
                            <MainImage src={image} />
                        </MainImageBox>
                        <SecondImageBox>
                            <SecondImage href="" src={image} />
                            <SecondImage src={image} />
                        </SecondImageBox>
                        
                    </ImageBox>


                    <InfoBox>
                        <TitleDetial>
                            <TitleDetialText>{title}</TitleDetialText>
                        </TitleDetial>

                        <NormalDetailBox>
                            <NormalDetailText>???????????????????????? : {author}</NormalDetailText>
                        </NormalDetailBox>

                        <NormalDetailBox>
                            <NormalDetailText>?????????????????????????????? : {publisher}</NormalDetailText>
                        </NormalDetailBox>

                        <NormalDetailBox>
                            <NormalDetailText>???????????????????????? : {catgories}</NormalDetailText>
                        </NormalDetailBox>
                            
                        <NormalDetailBox>
                            <NormalDetailText>????????????????????????????????????????????? : {type}</NormalDetailText>
                        </NormalDetailBox>

                        <NormalDetailBox>
                            <NormalDetailText>???????????????????????? : {code}</NormalDetailText>
                        </NormalDetailBox>

                        <PriceBox>
                            <PriceTitle>????????????</PriceTitle>
                            <PriceText>THB{priceWdiscount.toFixed(2)}</PriceText>
                            {discount? <PriceDiscountText>THB{price.toFixed(2)}</PriceDiscountText>:""}
                        </PriceBox>

                        <PackHandle>
                            <UpNumber number={number} handleNumber={handleNumber} />
                            <ButtonAdd onClick={() => addOrder(Array.from({length:number}, () => {
                                return book
                            }))}>Add</ButtonAdd>
                            <ButtonWish>
                                <FontAwesomeIcon icon={['fas', 'heart']}/>
                                Wishlist
                            </ButtonWish>
                        </PackHandle>

                        <BoxShare>
                            <NormalDetailText>???????????? : </NormalDetailText>
                            <a href="https://facebook.com" target="_blank"><ImageIcon src={FacebookIcon} /></a>
                            <a href="https://myaccount.google.com/profile" target="_blank"><ImageIcon src={GoogleIcon} /></a>
                            
                        </BoxShare>
                        
                    </InfoBox>



                </DetailBox>
            </Box9p>
            <SpaceBox />
            <PackHandle>
                <DescriptBox>
                    <DescrtipText >?????????????????????????????????????????????</DescrtipText>
                </DescriptBox>
                <DescriptBox>
                    <DescrtipText >??????????????????????????????</DescrtipText>
                </DescriptBox>
            </PackHandle>
            <Underline />
            <Box9p>
                <TextDescrip>??????????????????????????????: <TextTitleDes>{title}</TextTitleDes> </TextDescrip>
                <Ptext>
                    {description.split('\n').map(renderSplitText)}
                </Ptext>
            </Box9p>
            <SpaceBox />
            <Box9p>
                <CatgoriesBooks books={books} title={"?????????????????????????????????????????????????????????"} />
            </Box9p>
            
        </>
    )
}
const SecondImageBox = styled.div`
    width: 100%;
    display: flex;
    background: white;
`
const SecondImage = styled.img`
    width: 25%;
    margin: 10px;

`
const MainImageBox = styled.div`
    width: 100%;
    padding-bottom: 20px;
    
`

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
    background-color: white;
    display: flex;
    flex-direction: column;
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
    align-items: center;

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
const MainImage = styled.img`
    width: 80%;

`
const DescriptBox = styled.div`
    display: flex;
    border-bottom: solid 3px #003cff;
    padding: 3px 5px 3px 5px;
    width: 100px;
    margin: 2px 5px 50px 5px;
    justify-content: center;

`
const DescrtipText = styled.p`
    margin: 0;
    font-weight: bold;
`
const TextDescrip = styled.h3`
    margin: 0;
    font-weight: bold;
    margin: 50px 30px 50px 0;
    display: flex;
`
const TextTitleDes = styled.span`
    margin-left: 20px;

`


export default Detail