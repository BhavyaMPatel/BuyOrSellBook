import React,{useEffect,useState} from 'react'
import jwtDecode from 'jwt-decode';
import Cart from '../component/Cart';

export default function Addtocart() {
  const [UserId, setUserID] = useState('');
  const [cart,setCart]=useState([])
  let i=[];
  useEffect(() => {
    const token =localStorage.getItem('token');

    if(token){
      const user =jwtDecode(token)
      setUserID(user.userid);
      

      if(!user){
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }else{
      window.location.href='/login'
    }

  },[]);

  let cartItem=JSON.parse(localStorage.getItem('cart'));
  for(let item in cartItem){
    i.push(item);
  }

  // for(let item in cart){
  //   <Cart des={"N"} price={"00"} bookname={"MM"} />
  // }

  return (
    <>
    <div className='mt-24 ml-2 text-4xl font-Poppins'>Your Cart
    {/* {cart.map(CEBook)} */}    
    </div>
    <div className='flex flex-wrap m-2 mt-5 gap-2'>
    { 
    cartItem && Object.keys(cartItem).map((item, i) => (
        <Cart price={cartItem[item].price} bookname={cartItem[item].bookname} />
    ))
    }
    </div>
    <div className='font-Poppins ml-2 text-lg'>
      <button className='bg-blue-100 py-2 ml-2 rounded-md px-2' onClick={()=>{alert("Will Soon Update Checkout")}}>CheckOut</button>
    </div>
    </>
  )
}
