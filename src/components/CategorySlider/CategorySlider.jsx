import React from 'react';
import style from './CategorySlider.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  function getCategories(){
    return  axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }
  let {data , isLoading ,error} =  useQuery('getCategory'  , getCategories , {cacheTime:3000});
  console.log(data?.data.data);


  return <>

   <div className='container my-2'>{data?.data.data?     <Slider {...settings}>
    {data?.data.data?.map((categ)=>  <img key={categ._id} src={categ.image}  className=' w-100' height={150} />)}
    </Slider> :''}
    </div>
  </>
}
