import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import {useState,useEffect,createContext} from "react"
import './App.css';
import fetchData from './app/fetchData';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ShopContext } from './app/shopContext';
import "./pages/styles/Home.css"
import CartItem from './pages/CartItem';
import Fetch from './app/Fetch';


function App() {
  function DefaultCart(){

   
    let cart = {};
    for (let i=1;i<21 ;i++){
        cart[i]=0;
    }
    return cart;
    
};
  const [data,setData]= useState([])
  
  useEffect(()=>{
   
   getData();
   
 },[]);

 const getData = async ()=>{
    const res =  await fetchData()
    setData(res);
 }
 console.log(data);
  const [cartItem,setCartItem]=useState(DefaultCart);
const addCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
const removeCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const getTotal = ()=>{
  let totalAmount = 0;
  for (const item in cartItem){
    if(cartItem[item]>0)

    {
let itemInfo= data.find((product)=>product.id===Number(item));
    
totalAmount += cartItem[item] * itemInfo.price;
}
  }
  return totalAmount;
}

const contextValue = {addCart,removeCart,cartItem,data,getTotal}
  return (
    <div className="App bg-gray-200 align-centre rounded-xl" >
     <ShopContext.Provider value={contextValue}>
     <BrowserRouter>
     <Navbar></Navbar>
   
     <Routes>
     
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/products" element={<Fetch></Fetch>}></Route>
     </Routes>
     </BrowserRouter>
     
     </ShopContext.Provider>
    </div>
  );
}

export default App;
