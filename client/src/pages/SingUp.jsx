import React,{ useState } from 'react'
// import { useNavigate } from "react-router";

export default function SingUp() {
// const navigate = useNavigate();
const [userid,setid]=useState('');
const [email,setmail]=useState('');
const [password,setpassword]=useState('');


async function singup(event){
  const useriderror=document.querySelector('#useriderror')
  event.preventDefault() // prevent default for refeshing
  const responce=await fetch('http://localhost:5000/singup',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userid,
      email,
      password
    }),
  
  })
  const data=await responce.json();
  if(data.error){
    useriderror.textContent=data.error
    window.location.href='/singup'
  }else{
    window.location.href='/login'
  }

}

return (
    <>
    <section className="bg-gray-50 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create an account
                </h1>
                <form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="userid" className="block mb-2 text-sm font-medium text-gray-900 ]">UserId</label>
                        <input value={userid} onChange={(e)=>setid(e.target.value)} type="text" name="userid" id="userid" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Contains Only Alphanumeric"/>
                        <div id="useriderror" className="text-red-600"></div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ]">Your email</label>
                        <input value={email} onChange={(e)=>setmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@some.com" required=""/>
                        <div className="email error"></div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        <div className="password error"></div>
                    </div>
                    <button onClick={singup}  className="w-full text-red-50 bg-indigo-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/SignIn" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>




    
    </>
  )
}
