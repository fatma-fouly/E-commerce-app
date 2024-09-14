import React from 'react';
import style from './SpecificCategory.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

export default function SpecificCategory() {
  
  let param = useParams();

  function getSpecifiCategory(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
  }
  let {isLoading , data}   = useQuery('specificategory' , ()=> getSpecifiCategory(param.id));
  console.log(data?.data.data)

  return <>
  <div className="container">
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
     </div>  : <div className='container my-3'>
     <img src={data?.data.data.image}  className='w-auto'  height={400}/>
     <h2>{data?.data.data.name}</h2>
     </div> }
  </div>

  </>
}
