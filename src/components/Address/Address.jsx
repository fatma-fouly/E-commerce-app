import React, { useContext } from 'react';
import style from './Address.module.css';
import { useFormik } from 'formik';
import { cartContext } from '../Context/CartContext';

export default function Address() {
 let {onlinePayment , CartId}  = useContext(cartContext);
 async function handleOnlinePayment(values){
 let response = await onlinePayment(CartId , "http://localhost:3000" , values);
 console.log(response?.data.session.url);
 window.location.href =response?.data.session.url
    }
  let formik = useFormik({
    initialValues:{
      details: "",
      phone: "",
      city: ""
    },
    onSubmit:handleOnlinePayment
  })
  return <>
  <div className='container my-4'>
    <form onSubmit={formik.handleSubmit} >
      <label htmlFor="details">Details:</label>
      <input value={formik.values.details} type="text" id='details' name='details' className=' form-control' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
     
      <label htmlFor="phone">Phone:</label>
      <input value={formik.values.phone} type="tel" id='phone' name='phone' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      
      <label htmlFor="city">City:</label>
      <input value={formik.values.city} type="text" id='city' name='city' className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      <button className=' btn bg-main w-25 text-white mt-4' type='submit'>Pay Now</button>
    </form>
  </div>
  </>
}
