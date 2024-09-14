import axios, { Axios } from 'axios';
import style from './Signin.module.css';
import { useFormik } from 'formik' ;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup' ;
import {BallTriangle} from 'react-loader-spinner';
import { userContext } from '../Context/UserContext';


export default function Signin() {
 const [isloading,setloading] = useState(false);
 const [errMsg,setError] = useState(null);
  let  navigate= useNavigate() ;
  let {setUserToken}  = useContext(userContext) ;

  
  let validationSchema = yup.object({
  email:yup.string().required('Email is required').email('Enter a valid email'),
  password:yup.string().required('Password is required').matches(/^[A-Z][A-Za-z0-9]{6,10}$/ , 'enter a valid passwor'),
 })

 async function signIn(value){
  setloading(true)
  let response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',value)
  .catch( (err)=>{
  console.log(err.response.data.message)
  setError(err.response.data.message);
  setloading(false)
  })
  console.log(response)
  if(response.data.message == 'success') {
   setloading(false);
   localStorage.setItem('userToken' , response.data.token);
   setUserToken(response.data.token);
    navigate('/');
  }
  }
let formik = useFormik({
  initialValues :{
      email:"",
      password:"",
  },
  // validate ,
  validationSchema:validationSchema,
  onSubmit:signIn
}
)
  return <>
  <div className="container">
  <h2 className='text-center mt-3 text-main'>Login Now </h2>
  <form onSubmit={formik.handleSubmit} >
  
  <label htmlFor="email">Email :</label>
  <input name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id='email' className=' form-control' type="email" />
    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger mt-2 p-1"> {formik.errors.email} </div> :' '}  
  
  <label htmlFor="pw">Password :</label>
  <input name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id='pw' className=' form-control' type="password" />
  {formik.errors.password && formik.touched.password? <div className="alert alert-danger mt-2 p-1"> {formik.errors.password} </div> :' '}  

  
  <button disabled= {! ( formik.isValid && formik.dirty)} type='submit' className = "btn bg-main mt-2 text-white">Login
  {isloading ? 
       
    <BallTriangle
    height={20}
    width={100}
    radius={5}
    color="#fff"
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
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

