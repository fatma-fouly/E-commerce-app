import React, { useMemo, useState } from 'react';
import style from './Categories.module.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Categories() {
  let header = {
    token : localStorage.getItem('userToken') }

async function getCategories(){
  return await axios.get('https://ecommerce.routemisr.com/api/v1/categories' , {
    headers:header
  })
}
let {data , isLoading , isError}  = useQuery('categories' , getCategories);
console.log(data?.data.data)

  return <>
   <div className="container my-2">
    <h2 className='text-center text-main my-3'>All Categories</h2>
   <div className="row gy-4">
   {isLoading ? 
     <div className=" w-100 vh-100 d-flex justify-content-center align-items-centern">
     <BallTriangle
       height={100}
       width={100}
       radius={5}
       color="#4fa94d"
       ariaLabel="ball-triangle-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
       />
     </div>  
     : <>
     {data?.data.data.map((category) => {
     return <div className="col-md-4 " key={category._id}>
        <Link to={`/specificategory/${category._id} `} className="category brdr-brands">
          <img src={category.image} className='w-100 border-bottom' height={300} />
          <h3 className='text-center my-3 text-main '>{category.name}</h3>
        </Link>
      </div>
     } )}
     </> 
    }
    </div>

   </div>
 
  </>
}
