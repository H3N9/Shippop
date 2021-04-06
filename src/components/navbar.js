import React from 'react'
import BtnNav from '../components/btnNav'


const Navbar = () => {
    return (
        <div id="pakage">
            <div id="NavigateBar">
                <div id="BoxBtn">
                    <BtnNav title={"Book"} link={""} main={"mainBox"} />
                    <BtnNav title={"สินค้าใหม่"} link={"new"} main={""}  />
                    <BtnNav title={"สินค้าขายดี"} link={"best"} />
                    <BtnNav title={"สินค้าลดราคา"} link={"discount"} main={""}  />
                    <BtnNav title={"สินค้าแนะนำ"} link={"recommend"} main={""}  />
                </div>  
            </div>
            <div id="ShadowBottom" />
        </div>
    )
}

export default Navbar