import React from 'react'
import Cards from './card/Cards'
import Product from './Product/Product'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <div className="bg-white">
        <Cards />
        <Product />
      </div>
    </div>
  )
}

export default Dashboard