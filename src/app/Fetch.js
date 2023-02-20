import React,{useState,useEffect} from 'react'
import axios from "axios";
function Fetch() {
 const [data,setdata]= useState([])
    useEffect(()=>{
       async function fetchdata (){
      const result = await axios('https://fakestoreapi.com/products');
      setdata(result.data);
      }
      fetchdata();
    },[]);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <h4>{item.title}</h4>
          <img src={item.image} alt="" height="150px"></img>
        </li>
      ))}
    </ul>
  )
  
}


export default Fetch