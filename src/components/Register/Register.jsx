import axios, { Axios } from 'axios';
import { useFormik } from 'formik' ;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup' ;

// function validate(values){
//   let  errors = {}
//   if(!values.name) {
//     errors.name = 'name is required'
//   }
//   else if (values.name.length < 3){
//     errors.name = 'minimum char is 3'
//   }
//   else if(values.name.length >15){
//     errors.name='maximum char is 15'
//   }

//   if(!values.phone) {
//     errors.phone = 'enter a valid number'
//   }
//   else if (!/^01[1250][0-9]{8}$/.test(values.phone)){
//     errors.phone = 'enter a valid number'
//   }

//   if (!values.email){
//     errors.email = 'email is required'
//   }
//   else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = 'enter a valid email'
//   }

//   if (!values.password) { errors.password = 'passwordis required'}
//   else if (! /^[A-Z][a-z0-9]{6,8}$/.test(values.password)) {
//     errors.password = 'enter  a valid password'
//   }

//   if (!values.rePassword) {errors.rePassword = ' confirmation password is required'}
//   else if (values.rePassword !== values.password) {
//     errors.rePassword = 'Not  Matched'
//   }
//   return errors;
// }

export default function Register() {
 const [isloading,setloading] = useState(false);
 const [errMsg,setError] = useState(null);
  let  navigate= useNavigate() ;

 let validationSchema = yup.object({
  name:yup.string().min(3,'required 3 chr at least').max(15,'maximam chr is 15').required('name is required'),
  phone:yup.string().required('Phon eNumber is required').matches(/^01[0125][0-9]{8}$/ , 'Enter Avalid phone number'),
  email:yup.string().required('Email is required').email('Enter a valid email'),
  password:yup.string().required('Password is required').matches(/^[A-Z][A-Za-z0-9]{6,10}$/ , 'enter a valid passwor'),
  rePassword:yup.string().required('confirmation password is required').oneOf([yup.ref('password')])
 })

 async function signUp(val){
  setloading(true)
  let response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',val).catch( (err)=>{
  console.log(err.response.data.message)
  setError(err.response.data.message);
  setloading(false)
  })
  console.log(response)
  if(response.data.message == 'success') {
   setloading(false);
    navigate('/signin')
  }
  }
let formik = useFormik({
  initialValues :{
      name: "",
      phone :"",
      email:"",
      password:"",
      rePassword:"",
  },
  // validate ,
  validationSchema:validationSchema,
  onSubmit:signUp
}
)
  return <>
  <div className="container">
  <h2 className='text-center mt-3 text-main'>Register Now </h2>
  <form onSubmit={formik.handleSubmit} >
  <label htmlFor="name">Name :</label>
  <input name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id='name' className=' form-control' type="text" />
     {formik.errors.name && formik.touched.name? <div className="alert alert-danger mt-2 p-1"> {formik.errors.name} </div> :' '}  
  
  <label htmlFor="email">Email :</label>
  <input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id='email' className=' form-control' type="email" />
    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger mt-2 p-1"> {formik.errors.email} </div> :' '}  

  
  <label htmlFor="phone">Phone :</label>
  <input name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id='phone' className=' form-control' type="tel" />
      {formik.errors.phone && formik.touched.phone? <div className="alert alert-danger mt-2 p-1"> {formik.errors.phone} </div> : ''}
  
  <label htmlFor="pw">Password :</label>
  <input name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id='pw' className=' form-control' type="password" />
  {formik.errors.password && formik.touched.password? <div className="alert alert-danger mt-2 p-1"> {formik.errors.password} </div> :' '}  

  
  <label htmlFor="repw">Re password :</label>
  <input name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} id='repw' className=' form-control' type="password" />
  {formik.errors.rePassword && formik.touched.rePassword? <div className="alert alert-danger mt-2 p-1"> {formik.errors.rePassword} </div> :' '}  

  
  <button disabled= {! ( formik.isValid && formik.dirty)} type='submit' className = "btn bg-main mt-2 text-white">Register
  {isloading ? 
           <span><i className="fa-solid fa-spinner fa-spin mx-2"></i></span>
           : ''  
        }
  </button>
  <div>
          {errMsg !== null ?
           <p className='text-danger'>{errMsg}</p>
           : ''        }
        </div>

  </form>
   </div>
  </>
}
