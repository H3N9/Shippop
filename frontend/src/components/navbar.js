import React from 'react'
import styled from 'styled-components'
import { deviceJs } from '../tools/tools'
import BoxLink from '../components/btnNav'


const Navbar = () => {
    return (
        <Pakage>
            <NavigateBar>
                <BoxBtn>
                    <BoxLink title={"Book"} link={""} main={"mainBox"} />
                    <BoxLink title={"สินค้าใหม่"} link={"new"} main={""}  />
                    <BoxLink title={"สินค้าขายดี"} link={"best"} />
                    <BoxLink title={"สินค้าลดราคา"} link={"discount"} main={""}  />
                    <BoxLink title={"สินค้าแนะนำ"} link={"recommend"} main={""}  />
                </BoxBtn>  
            </NavigateBar>
            <ShadowBottom />
        </Pakage>
    )
}

const Pakage = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
`

const NavigateBar = styled.div`
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
`

const BoxBtn = styled.div`
    margin: 0 5% 0 5%;
    width: 90%;
    display: flex;
    flex-direction: row;

`

const ShadowBottom = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.4150035014005602) 0%, rgba(0,0,0,0) 100%); 
    height: 5px;
    width: 100%;
`

export default Navbar