import React, { useContext, useEffect, useState } from 'react';
import style from './Cart.module.css';
import { cartContext } from '../Context/CartContext';
import { BallTriangle } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


export default function Cart() {
  let {getUserCart ,deleteItem ,updateItemCount , clearCart} = useContext(cartContext);
  const [Cartdetails, setCartdetails] = useState(null);

 async function getCartData(){
    let response = await getUserCart();
    setCartdetails(response.data);
    console.log(response.data)
  }
 
 async function removeItem(id) {
  let {data}  = await deleteItem(id);
  setCartdetails(data);
 } 
async function updateItem(id, count) {
  let { data } =  await updateItemCount(id , count);
  setCartdetails(data);
}

async function clear() {
await clearCart();
setCartdetails(null);
}
  console.log(Cartdetails);

  useEffect(() => {
    getCartData();
  }, [])
  
  return <>
  {Cartdetails?  <div className=' w-75 mx-auto container my-3 bg-light'>
  <h3 className='text-main pt-3'>Shopping Cart</h3>
  <h3 className='text-main h6 fw-bold'>Number of Items : {Cartdetails.numOfCartItems}  Item </h3>
  <h3 className='text-main h6 fw-bold'>Total Price : {Cartdetails.data.totalCartPrice}  EGP </h3>
  {Cartdetails.data.products.map((prod) => <div className="row border-bottom  py-3" key={prod._id} >
    <div className="col-md-1">
      <img src={prod.product.imageCover}  className='w-100' />
    </div>
    <div className="col-md-11">
    <div className="d-flex justify-content-between align-content-center">
    <div>
        <h3 className='h5'>{prod.product.category.name}</h3>
        <h3 className='h6 text-main'>Price: {prod.price}</h3>
    </div>
    <div className='mt-3' >
      <button onClick={()=> updateItem(prod.product.id , prod.count +1)} className='btn brdr-btn px-1 py-0'>+</button>
      <span className=' mx-2'>{prod.count}</span>
      <button onClick={()=> updateItem(prod.product.id , prod.count -1)} className='btn brdr-btn px-1 py-0'> - </button>

    </div>
    </div>
    <button onClick={()=>removeItem(prod.product.id)} className='btn p-0 font-small'><i className=" text-danger fa-solid fa-trash"></i> Remove</button>
    </div>
  </div>
  
 )}
    <div className="d-flex justify-content-between container w-50 mt-3">
    <Link to={'/address'} className='btn bg-main w-50 m-2 text-white '> online payment</Link>
    <button className='btn bg-main w-50 m-2 text-white' >Pay on delivery</button>
    </div>
    <button onClick={()=> clear()} className='my-3 w-100 mx-auto btn btn-outline-success'>Clear Cart</button>

 </div>
   : 
 <section className='container justify-content-center d-flex py-5' >
      <BallTriangle 
      height={120}
      width={120}
      radius={6}
      color="#008000"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      /> 
 </section>
 }

  </>
}
