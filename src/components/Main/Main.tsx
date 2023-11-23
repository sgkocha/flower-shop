import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Shop from '../../pages/Shop'
import SingleProduct from '../../pages/SingleProduct'

const Main = () => {
  return (
    <Routes>
        <Route 
            path='/'
            element={<Home/>}
        />
        <Route
          path='shop'
          element={<Shop/>}
        />
        <Route
          path='product'
          element={<SingleProduct/>}
        />
    </Routes>
  )
}

export default Main