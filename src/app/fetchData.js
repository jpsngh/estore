
import axios from "axios";
const fetchData =async ()=>{
    const result =  await axios('https://fakestoreapi.com/products');
   console.log(result);
    return result.data;
    }

    export default fetchData