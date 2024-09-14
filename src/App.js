import {React} from 'react';
import './App.css'
import {createBrowserRouter, createHashRouter, RouterProvider}  from 'react-router-dom' ;
import Layout from './components/Layout/Layout.jsx'
import Cart from './components/Cart/Cart.jsx';
import Brands from './components/Brands/Brands.jsx';
import Products from './components/Products/Products.jsx';
import Register from './components/Register/Register.jsx';
import Categories from './components/Categories/Categories.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Home from './components/Home/Home.jsx';
import Signin from './components/Signin/Signin.jsx';
import CountercontextProvider from './components/Context/CounterContext.js';
import UserContectProvider from './components/Context/UserContext.js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import { CartContextprovider } from './components/Context/CartContext.js';
import { Toaster }  from  'react-hot-toast' ;
import Profile from './components/Profile/Profile.jsx';
import Address from './components/Address/Address.jsx';
import Orders from './components/Orders/Orders.jsx';
import SpecificCategory from './components/SpecificCategory/SpecificCategory.jsx';



export default function App() {
 
 let routers = createHashRouter([
{path :'/'  , element :<Layout/>  ,  children :[
  { index:true , element: <ProtectedRoute><Home/></ProtectedRoute> },
  {path : 'cart' , element: <ProtectedRoute><Cart/></ProtectedRoute> },
  {path :'brands' , element : <ProtectedRoute><Brands/></ProtectedRoute> },
  {path :'products' ,element :  <ProtectedRoute><Products/></ProtectedRoute>} ,
  {path :'categories' ,element :  <ProtectedRoute><Categories/></ProtectedRoute> },
  {path :'productdetails/:id' ,element :  <ProtectedRoute><ProductDetails/></ProtectedRoute> },
  {path :'profile' ,element :  <ProtectedRoute><Profile/></ProtectedRoute> },
  {path :'address' ,element :  <ProtectedRoute><Address/></ProtectedRoute> },
  {path :'allorders' ,element :  <ProtectedRoute><Orders/></ProtectedRoute> },
  {path :'specificategory/:id' ,element :  <ProtectedRoute><SpecificCategory/></ProtectedRoute> },
  {path :'register' ,element : <Register /> },
  {path :'signin' ,element : <Signin /> },
  {path :'*' ,element : <ProtectedRoute><NotFound /> </ProtectedRoute>},
] }
 ])
 
 return <>


<CartContextprovider>
  
   <UserContectProvider>
  
  <RouterProvider router={routers} ></RouterProvider>
  
  </UserContectProvider>
</CartContextprovider>
<Toaster />


  </>
}
