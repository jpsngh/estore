import React,{useContext} from 'react'
import { ShopContext } from '../app/shopContext';
const Product = (props) => {
    const {addCart,cartItem} = useContext(ShopContext) 
   const {title,id,price,image} = props.data;
 console.log(cartItem);

  return (
    <div className='product'>
        <ul>
        <li key={id}>
          <h2>{title}</h2>
          <img src={image} alt=""height="30px" width="30px"></img >
          <p>{price}</p>
        </li>
        </ul>

      
    
    <button className="btn-p" onClick={()=>addCart(id)}>Add </button>
    </div>
  )
}

export default Product