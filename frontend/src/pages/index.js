import React, {createContext, useContext, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/navbar'
import styled from 'styled-components'
import Home from './home'
import NewGoodsPage from './newGoodsPage'
import RecomPage from './recomPage'
import DiscountPage from './discountPage'
import BestSalePage from './bestSalePage'
import Detail from './detail'

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
                            <Route path="/detail">
                                <Detail />
                            </Route>
                        </Switch>
                    </ContentBox>
                </OrderContext.Provider>
            </Router>
        
    )
}

const ContentBox = styled.div`
    width: 100%;
    height: 100%;
`

export default Index


// export const useOrderContext = () => useContext(OrderContext)