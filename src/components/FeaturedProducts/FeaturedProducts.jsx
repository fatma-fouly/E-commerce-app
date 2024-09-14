import React, { useContext } from 'react';
import style from './FeaturedProducts.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import {BallTriangle} from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';
import toast, { Toast }  from  'react-hot-toast' ;


export default function FeaturedProducts() {
  let {addToCart} = useContext(cartContext);

  async function addProd(prodId){
  let response =await addToCart(prodId);
  if(response.data.status === "success"){
    toast.success('The product Added To Your Cart')
  }
  else{
    toast.error('Product not added , try again')
  }
  }

  function getFeaturedData() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products'); }
  let {isLoading , isFetching , isError ,data } = useQuery('featuredQuery'  , getFeaturedData , {
    cacheTime :3000 ,
    refetchInterval: 50000
  });
  // console.log(data?.data.data);
  
  return <>
  <div className="container py">
   <h2 className='text-main'> Featured Products</h2> 
   {isLoading ?   <div className=' d-flex justify-content-around pt-5'> 
    <BallTriangle 
      height={120}
      width={120}
      radius={6}
      color="#008000"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      /> 
   </div>
       :  <div className="row"> 
      {data?.data.data.map((prod) => <div key={prod._id} className='col-md-2'> 
    
        <div className='product cursor-pointer py-3 px-2'> 
        <Link to={`/productdetails/${prod._id} `} >
          <img className='w-100' src= {prod.imageCover} />
          <span className=' fw-bold font-sm text-main'>{prod.category.name} </span>
          <h3 className=' h6'>{prod.title.split(" ").splice(0,2).join(" ")}</h3>
          <div className='d-flex justify-content-between mt-3'>
            <span> {prod.price} EG</span>
            <span className='rating-color' > <i className='fa fa-star rating-color'></i> {prod.ratingsAverage}</span>
             </div>
             </Link>
             <button onClick={()=> addProd(prod._id)} type='submit' className='btn w-100 text-white bg-main mt-1'> Add To Cart</button>

        </div>
      


        </div>
        )}
     </div> }
  
  </div>
  </>
}
