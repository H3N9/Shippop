import React, {createContext, useContext, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/navbar'
import styled from 'styled-components'
import Home from './home'
import NewGoodsPage from './newGoodsPage'
import RecomPage from './recomPage'
import DiscountPage from './discountPage'
import BestSalePage from './bestSalePage'

const OrderContext = createContext()

const Index = () => {
    const [order, setOrder] = useState([])

    const addOrder = (newOrder) => {
        setOrder([...order, ...newOrder])
    }



    return (
            <Router>
                <OrderContext.Provider value={{addOrder}}>
                    <NavBar />
                    <ContentBox >
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/new">
                                <NewGoodsPage />
                            </Route>
                            <Route path="/best">
                                <BestSalePage />
                            </Route>
                            <Route path="/discount">
                                <DiscountPage />
                            </Route>
                            <Route path="/recommend">
                                <RecomPage />
                            </Route>
                        </Switch>
                    </ContentBox>
                </OrderContext.Provider>
            </Router>
        
    )
}

const ContentBox = styled.div`
    width: 90%;
    height: 100%;
    margin: 100px 5% 0 5%;
    background: red;
`

export default Index


// export const useOrderContext = () => useContext(OrderContext)