import React from 'react'
import {Link} from "react-router-dom"
import "../pages/styles/Navbar.css"
import { ShoppingCart ,Package} from 'phosphor-react'
function Navbar() {
  return (
    <div className='navbar bg-black-100, rounded-xl'>
  <Link to="/">Home</Link>
  <Link to="/cart"> <ShoppingCart size="30"></ShoppingCart></Link>
  <Link to="/products"> <Package size="30"></Package></Link>

    </div>
  )
}

export default Navbar