import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let cartContext = createContext();
let header = {
    token : localStorage.getItem('userToken')
}
    function addToCart(iD){
      return  axios.post('https://ecommerce.routemisr.com/api/v1/cart'   , 
            {productId : iD} ,
            {headers : header}
        ).then((response)=> response)
        .catch((err)=> err);
    }
    function getUserCart(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart'   , 
            {
            headers:header
        }).then((response) => response)
        .catch((err) => err)
    }
   function deleteItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {headers:header})
    .then(( response ) => response)
    .catch(( err ) => err)
   }
   function updateItemCount (productId , count) {  
  return    axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , 
        {   count: count ,
            productId:productId
        },
        {
        headers:header
        }).then((response)  =>response) .catch((err) => err)
   }
   function clearCart(){
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart' , {headers:header})
    .then((response)  => response).catch((err) => err)
   }
   function onlinePayment(cartId , url , values){
    return  axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`   , 
          {shippingAddress : values} ,
          {headers : header}
      ).then((response)=> response)
      .catch((err)=> err);
  }
export function CartContextprovider(props){
    const [CartId, setCartId] = useState(null);
     async   function getCart(){
        let {data} = await getUserCart();
        // console.log(data);
        setCartId(data?.data._id);
        // console.log(CartId)
    }
    useEffect(() => {
       getCart()
    }, [])
    
    return  <cartContext.Provider value={{CartId, addToCart ,onlinePayment , getUserCart , deleteItem , updateItemCount , clearCart}}>
        {props.children}
    </cartContext.Provider>
}
