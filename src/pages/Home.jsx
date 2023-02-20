import React,{useContext,useEffect,useState} from 'react'
import Product from '../components/Product'
import { PRODUCTS } from '../app/Products.js'
import Fetch from '../app/Fetch'
import fetchData from '../app/fetchData'
import { ShopContext } from '../app/shopContext'
function Home() {
 const {data}=useContext(ShopContext);
  

  return (
    <div className='shop'>
      <div className='shopTitle bg-green'>
        <h1>ECOM STORE</h1>
     
      <div div className='products'>
        
       
          {data.map((product)=>(
          <Product data={product}></Product>))}
          
      </div>
        </div>
    </div> 
  )
}

export default Home