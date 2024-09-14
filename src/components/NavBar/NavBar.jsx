import React, { useContext } from 'react';
import style from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo  from '../../assets/img/freshcart-logo.svg' ;
import { userContext } from '../Context/UserContext';
import Profile from '../Profile/Profile';

export default function NavBar() {
  let navigate = useNavigate();

function logOut(){
  localStorage.removeItem('userToken');
  setUserToken(null);
  navigate('/signin');
}  
let {UserToken , setUserToken} = useContext(userContext);
  return <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid container">
    <Link className="navbar-brand" to='/'>
     <img src={logo} alt='fresh market logo'/>
    </Link>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {UserToken  !== null ?  <>
    <ul className="navbar-nav mx-auto ps-5 mb-2 mb-lg-0">
      
      <li className="nav-item">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="cart">Cart</Link>
      </li>
    
      <li className="nav-item">
        <Link className="nav-link" to="categories">Categories</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="brands">Brands</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="profile">Profile</Link>
      </li>
    </ul>
    </> : ''}
   
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 cursor-pointer">
      <li className="nav-item d-flex align-items-center">
        <i className=' fab fa-facebook mx-2'></i>
        <i className=' fab fa-twitter mx-2'></i>
        <i className=' fab fa-instagram mx-2'></i>
        <i className=' fab fa-tiktok mx-2'></i>
      </li>
    
     {UserToken !== null ?
        <li className="nav-item">
        <span onClick={()=> {logOut()}} className='nav-link pointer' >Log Out</span>
      </li> : <>
      <li className="nav-item">
        <Link className="nav-link" to="register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="signin">Sign in</Link>
      </li>
      </>}
     
   
    </ul>
    </div>
  </div>
</nav>
  </>
}
