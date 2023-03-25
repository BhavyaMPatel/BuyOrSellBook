import React, { useEffect, useState } from 'react'
import BuyCard from '../component/BuyCard'
import jwtDecode from 'jwt-decode'
import Alert from '../component/Alert';
export default function BuyBook() {
    const [records, setRecords] = useState([]);
    const [UserId, setUserID] = useState('');
    const [cart,setCart]=useState({})
    const [subTotal,setsubTotal]=useState(0) 
    const [click,setClick]=useState(false);

    async function getRecords() {
      const response = await fetch(`http://localhost:5000/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records);
      return;
    }
    function close(){
      let main=document.getElementById('main');
      // main.classList.toggle('hidden');
      setClick(false);
  }  
    useEffect(() => {
        const token =localStorage.getItem('token');
        if(token){
          const user =jwtDecode(token)
          setUserID(user.userid);
          if(!user){
            localStorage.removeItem('token')
            window.location.href='/'
          }else{
            getRecords();
          }
        }else{
          window.location.href='/login'
        }

        // let c=localStorage.getItem("cart");
        // setCart(c);
      },[]);

    console.log(records);


    function saveCart(cart){
        localStorage.setItem("cart",JSON.stringify(cart));
    }

    function addToCart(userid,itemCode,price,bookname){
        let newCart; 
        if(localStorage.getItem('cart')){
          newCart=JSON.parse(localStorage.getItem('cart'));
        }else{
          newCart={};
        }
        
        if(itemCode in newCart){
          alert("Already In Cart !!");
        }else{
          newCart[itemCode]={userid,price,bookname};
          setClick(true);
        }
        console.log(cart);
        setCart(newCart);
        saveCart(newCart);
    }
    

    function SchoolBook(record){ 
      if(record.Select ==="SB"){
        return  ( 
            <BuyCard user={UserId} src={`http://localhost:5000/images/${record.UserId}/${record.BookName}`} desc={record.Textarea} price={record.Price} bookname={record.BookName} pid={record._id} saveCart={saveCart} addToCart={addToCart} />
        )
        }
    }

    function CEBook(record){ 
      if(record.Select ==="CE"){
        return  ( 
            <BuyCard user={UserId} src={`http://localhost:5000/images/${record.UserId}/${record.BookName}`} desc={record.Textarea} price={record.Price} bookname={record.BookName} pid={record._id} saveCart={saveCart} addToCart={addToCart}/>
        )
        }
    }

    function CollegeBook(record){ 
      if(record.Select ==="CB"){
        return  ( 
            <BuyCard user={UserId} src={`http://localhost:5000/images/${record.UserId}/${record.BookName}`} desc={record.Textarea} price={record.Price} bookname={record.BookName} pid={record._id} saveCart={saveCart} addToCart={addToCart}/>
        )
        }
    }

    function MeBook(record){ 
      if(record.Select ==="MI"){
        return  ( 
            <BuyCard user={UserId} src={`http://localhost:5000/images/${record.UserId}/${record.BookName}`} desc={record.Textarea} price={record.Price} bookname={record.BookName} pid={record._id} saveCart={saveCart} addToCart={addToCart}/>
        )
        }
    }

  return (
    <>
    <div className='mt-24'></div>
    <Alert close={close} click={click}/>;
    <div className='font-bold text-3xl ml-2 sm:ml-6 font-Poppins'>School Books</div>
    <div className='flex flex-wrap gap-4 m-2 sm:m-5 justify-start'>
    {records.map(SchoolBook)}
    </div>
    <div className='font-bold text-3xl ml-2 sm:ml-6 font-Poppins'>College Books</div>
    <div className='flex flex-wrap gap-4 m-2 sm:m-5 justify-start'>
    {records.map(CollegeBook)}
    </div>
    <div className='font-bold text-3xl ml-2 sm:ml-6 font-Poppins'>Competitive Exam Books</div>
    <div className='flex flex-wrap gap-4 m-2 sm:m-5 justify-start'>
    {records.map(CEBook)}
    </div>
    <div className='font-bold text-3xl ml-2 sm:ml-6 font-Poppins'>Miscellaneous Book</div>
    <div className='flex flex-wrap gap-4 m-2 sm:m-5 justify-start'>
    {records.map(MeBook)}
    </div>
    </>
  )
}
