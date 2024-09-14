import React, { useEffect , useState } from 'react';
import style from './Brands.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Brands() {
  let header = {
    token : localStorage.getItem('userToken')
}
  const [Brand, setBrand] = useState([]);
  async function getBrands(){
    let {data} =  await axios.get('https://ecommerce.routemisr.com/api/v1/brands' , {
      headers :header
    })
    console.log(data?.data);
    setBrand(data?.data)
  }
  useEffect(() => {
    getBrands() }
    , [])
  
  return <>
    <div className="container m-auto">
      <h2 className='text-main my-2 text-center'>All Brands</h2>
      <div className="row my-3 justify-content-center">
     {Brand?.map((brand)=> <div className='col-md-2 mx-4 g-3 text-center  brdr-brands justify-content-center' key={brand._id}>
      <Link>
      <div>
        <img src={brand.image}  className='w-100 mx-2 my-3' alt={brand.name} />
        <h3 className='h6 text-secondary-emphasis mb-2'> {brand.name} </h3>
         </div>
         </Link>
       </div> )}
      </div>
    </div>
  </>
}
