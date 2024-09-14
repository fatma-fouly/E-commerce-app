import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
  return <>
   <div className= "bg-light w-100 text-dark " >
   <div className="container">
   <h3 className='pt-5 fw-medium'>Get the FreshCart app</h3>
   <h3 className='h5 text-muted'>We will send you a link, open it on your phone to download the app.</h3>
   <div className=" pb-2">
    <input placeholder='Email ..' type="email" className='border  bg-muted w-75 rounded-1 p-1 ms-3 my-3' />
    <button className='bg-main btn text-white px-5 py-1 ms-4 mb-1'>Share app link</button> 
    <hr className='text-muted' />
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <p className='mt-2'>Payment partners </p>
        <span className='ms-2 text-warning'> <i className="fa-brands fa-amazon-pay"></i>      </span>
        <span className=' ms-2 '>      <i className="fa-brands fa-cc-mastercard"></i>   </span>
        <span className=' ms-2'>      <i className="fa-brands fa-cc-paypal"></i>       </span>
      </div>
      <div className="d-flex align-items-center">
        <p className='mt-2 me-2'> Get delivers with freshcart </p>
        <div className='px-4 text-white bg-black d-flex align-items-center rounded-1'> <i className="fa-brands fa-apple me-2 fs-3"></i> <div>
          <span className='font-sm fw-lighter'>Available on</span>
          <h6>Apple Store</h6>
        </div> </div>
        <div className='ms-2 px-4 text-white bg-black d-flex align-items-center rounded-1'> <i className="fa-brands fa-google-play me-2 fs-4"></i> <div>
          <span className='font-sm fw-lighter'>Get it on</span>
          <h6>Google play</h6>
        </div> </div>

      </div>
    </div>
   </div>
   <hr className=' text-muted pb-4' />
   </div>
   </div>
  
  </>
}
