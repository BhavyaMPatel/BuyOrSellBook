import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alert from './component/Alert';
// import Create  from './component/create'
import Navbar from './component/Navbar';
import BuyBook from './Pages/BuyBook';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import SellBook from './Pages/SellBook';
import SingUp from './Pages/SingUp';
import Cart from './Pages/Cart';

export default function App() {


// useEffect(()=>{
// console.log('Hey I am Use Effect From React');
// try{
// if(localStorage.getItem('cart')){
//   setCart(JSON.parse(localStorage.getItem('cart')));
// }
// }catch (e){
// }
// },[])





// const removeFromCart =(userid,itemCode,price,bookname)=>{
//   let newCart = cart;
//   if(itemCode in cart){
//     delete newCart.itemCode;
//   }else{
//     console.log("Already deleted");
//   }
//   setCart(newCart);
//   saveCart(newCart);
// }

// const clearCart = () =>{
//   setCart({});
//   saveCart({});
// }
 
  return (
    <>
    <><Navbar/></>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signUp' element={<><SingUp/></>}/>
        <Route path='/login' element={<><Login/></>}/>
        <Route path='/logout' element={<><Logout/></>}/>
        <Route path='/sellbook' element={<><SellBook/></>}/>
        <Route path='/buybook' element={<BuyBook  />}/> 
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}
