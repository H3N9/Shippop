import React, {createContext, useContext, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from '../components/navbar'
import Home from './home'
import NewGoodsPage from './newGoodsPage'
import RecomPage from './recomPage'
import DiscountPage from './discountPage'
import BestSalePage from './bestSalePage'
import '../styles/styleUniversal.css'

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
                    <div className="ContentBox" >
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
                    </div>
                </OrderContext.Provider>
            </Router>
        
    )
}

export default Index


// export const useOrderContext = () => useContext(OrderContext)