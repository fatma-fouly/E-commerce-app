import React, { useContext, useEffect } from 'react';
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import {Helmet}  from 'react-helmet'  ;
import { cartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetails() {

  let param = useParams();

  function getProdDetails(id){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  let {isLoading , isError, isFetching , data}   = useQuery('productDetails' , ()=> getProdDetails(param.id))
  // console.log(data?.data.data)


  return <div  className='container'>
    {data?.data.data ?  <div className='row py-2 align-items-center'> 
      <Helmet>
                <meta charSet="utf-8" />
                <title>{data?.data.data.title} </title>
            </Helmet>
     <div className="col-md-4">
      <img src={data?.data.data.imageCover} alt={data?.data.data.title}  className=' w-100' />
     </div>
     <div className="col-md-8 ps-4">
     <div className=' ms-1'> <h3 className='h4'>{data?.data.data.title}</h3>
     <p className=' text-muted'>{data?.data.data.description}</p></div>
      <h6 className=' fw-bold'>{data?.data.data.category.name}</h6>
     <div className=' d-flex align-items-center justify-content-between' > <h6 className=' fw-bold'>{data?.data.data.quantity} EGP</h6>
     <span className=' text-muted' > <i className='fa fa-star rating-color'></i> {data?.data.data.ratingsAverage}</span>
     </div>
     <button  type='submit' className='mt-3 btn bg-main w-100 text-white' >+ add to cart</button>
     </div>
    </div> : ''}
  </div>
}
