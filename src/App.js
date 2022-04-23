import React from 'react'

import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Footer from './Components/Footer/Footer'

import {Route , Routes} from 'react-router-dom'


const App = (props) => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product:id' element={<Product />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App