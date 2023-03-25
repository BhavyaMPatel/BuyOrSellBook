import React,{useEffect} from 'react'

export default function Logout() {
    useEffect(() => {
        const token =localStorage.getItem('token');
        if(token){          
            localStorage.removeItem('token')
            window.location.href='/'
        }else{
            window.location.href='/'
        }
      },[]);

  return (
    <div></div>
  )
}
