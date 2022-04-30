import React from 'react'

import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Footer from './Components/Footer/Footer'

import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'


const App = (props) => {
  return (
  
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product:id' element={<Product />} />
    </Routes>
    <Footer />
    </Router>
    
  )
}

export default App