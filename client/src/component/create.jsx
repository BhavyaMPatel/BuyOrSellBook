import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {

const navigate = useNavigate();
const [id,setid]=useState('');
const [mailid,setmailid]=useState('');
const [password,setpassword]=useState('');

async function reg(event){
  event.preventDefault() // prevent default for refeshing
  const responce=await fetch('http://localhost:5000/user',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      mailid,
      password
    }),
  
  })

  console.log(await responce.json());
  console.log('Ji');
  navigate("/")
  
}

return (
    <>
    <div>App</div>
      <form onSubmit={reg}>
        <input type="text" placeholder='userid' value={id} onChange={(e)=>setid(e.target.value)} style={{margin:'2px'}}/><br/>
        <input type="email" placeholder='emailid' value={mailid} onChange={(e)=>setmailid(e.target.value)}  style={{margin:'2px'}} /><br/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}  style={{margin:'2px'}} /><br/>
        <input type="submit"/>
      </form>
    </>
)


}


