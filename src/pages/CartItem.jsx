
import "./styles/Cart.css"
import React,{useContext,useEffect} from 'react'
import { ShopContext } from '../app/shopContext'
function CartItem(props) {
    const {cartItem,addCart,removeCart}= useContext(ShopContext);
    const {id,title,price,image} = props.data;
    const CartItemAmount = (cartItem[id]);
  return (
    <div className='.cartItem'> 

 
  <li className='cartItemTitle'> {title} </li>


 <div className=' cartItemImage' >
 <img   src = {image} alt = "" height="30px" width="30px"></img>

</div><div>
       <div className="cartItemDetails"> 
        <button onClick={()=>addCart(id)}>+</button>
        <p className="search"  defaultValue={cartItem[id]}> {cartItem[id]}</p>
        <button className='cartItemRemove' onClick={()=>removeCart(id)}>-</button>

       </div >
    <div className='cartItemPrice'> {Math.round((price*CartItemAmount))}  </div>
       </div >  </div>

  )
}

export default CartItem