
 function DefaultCart(){

  
    let cart = {};
    for (let i=1;i<5+1;i++){
        cart[i]=0;
    }
    return cart;
    
};
export {DefaultCart}