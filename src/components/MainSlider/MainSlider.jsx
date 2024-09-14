import React from 'react';
import style from './MainSlider.module.css';
import Slider from "react-slick";
import img1 from '../../assets/images/slider-image-1.jpeg';
import img2 from '../../assets/images/slider-image-2.jpeg';
import img3 from '../../assets/images/slider-image-3.jpeg';
import static1 from '../../assets/assortment-citrus-fruits.png';
import static2 from '../../assets/images/slider-2.jpeg';

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false
  };
  return <>
   
  <div className="container my-4">
  <div className="row gx-0">
      <div className="col-md-9">
      <Slider {...settings}>
       <img height={400} src={img1} alt='imageslider1'  />
       <img height={400} src={img2} alt='imageslider2'  />
       <img height={400} src={img3} alt='imageslider3'  />
       </Slider>
      </div>
      <div className="col-md-3">
         <img  src={static1} height={200} alt='staticimage'className='w-100' />
         <img  src={static2} height={200} alt='staticimge' className='w-100' />
      </div>
     </div>
  </div>
 
  
  </>
}
