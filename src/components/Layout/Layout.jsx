import React, { useContext, useEffect } from 'react';
import style from './Layout.module.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { userContext } from '../Context/UserContext';
import { Offline, Online } from "react-detect-offline";
import { Helmet } from 'react-helmet';

export default function Layout() {

  
 let { setUserToken } = useContext(userContext);

 useEffect(() => {
  if(localStorage.getItem('userToken') !== null) {
    setUserToken(localStorage.getItem('userToken'));
   }
 } ,
[])
  return <>
  <NavBar/>
   <div className='pb-4'>
   <Outlet></Outlet>
   </div>
   <div>
 
    <Offline> 
      <div className='network shadow '> <i className='me-2 fas fa-wifi'></i> You Are Offline  </div>
    </Offline>
  </div>
  <Footer/>
  </>
}
