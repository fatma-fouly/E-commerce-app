import React from 'react';
import style from './Profile.module.css';
import { jwtDecode } from 'jwt-decode';

export default function Profile() {

  let encodedToken  =  localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken);
  return <>
   <h1 className='w-25 mx-auto py-3 rounded-2 text-center my-5 bg-main text-light shadow'>Hello : {decodedToken.name}</h1>
  </>
}
