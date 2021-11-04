import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductPage from './components/Product/Product'
import Cart from './components/Cart/Cart';
import Header from './components/Header'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer'
import './App.css'


const App = () => {
  
  return(
      <Router>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/store/:id' component={ProductPage}/>
          <Route exact path='/cart' component={Cart}/>
          
          <Route path='/checkout/:id' component={Checkout}/>
        </Switch>
        <Footer/>
      </Router>
  )
}

export default App