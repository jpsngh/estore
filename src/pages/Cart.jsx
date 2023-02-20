import React,{useContext} from 'react'
import "./styles/Cart.css"
import { ShopContext } from '../app/shopContext'
import CartItem from './CartItem'

const Cart = () => {
  
const {cartItem,data,getTotal}= useContext(ShopContext);
  return (<div className='cart'>
    <div className='cartTitle'>Your Cart</div>
        {""}
       
        <div className='cartItems'>
    {(cartItem!==0)?data.map((product)=> {
        if(cartItem[product.id]!== 0){
            return <CartItem data= {product}></CartItem>
        }
      
        
    }):<div> No items on Cart</div>}
         
         <div className='cartSubtotal'>
          Subtotal = {getTotal()}
        </div>
</div>
    </div>
    
  )
}

export default Cart