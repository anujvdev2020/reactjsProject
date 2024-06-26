import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navigation from './components/Navigation/Navigations'
import {HomePage} from './components/Homepage/HomePage';
import {ProductDetail} from './components/ProductDetail/ProductDetail'
function App() {

  return (
    <>
      <div>
        <Router>
          {/* <Navigation/> */}
            <Route path="/" component={HomePage} exact/> 
            <Route path="/product/:id" component={ProductDetail} />
            {/* <Route path="/cart" component={Cart} /> */}
            {/* <Route path="/account" component={Account} /> */}
            {/* <Route path="/:name" component={RestaurantDetails} /> */}

        </Router>
        </div>
    </>
  )
}

export default App
