import React from 'react';
import style from './NotFound.module.css';
import img404 from '../../assets/images/error.svg'
export default function NotFound() {
  return <>
  <div className='container text-center'>
    <img src= {img404} className='w-50' />
  </div>
  </>
}
