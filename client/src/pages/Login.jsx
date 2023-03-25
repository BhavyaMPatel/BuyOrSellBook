import React,{ useState }  from 'react'

export default function Login() {

const [userid,setid]=useState('');
const [password,setpassword]=useState('');

async function login(event){
event.preventDefault();
const responce = await fetch('http://localhost:5000/login',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userid,
        password
    }),
    
})

const data=await responce.json()

console.log(data);

if(data.userid){
localStorage.setItem('token',data.token);
window.location.href="/BuyBook";
}else if(data.error){
    const error=document.querySelector('#error')
    error.textContent=data.error
}





}

return (
    <>
    <section className="bg-gray-50 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-90">
            BuyAndSell Book
        </a>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tighter text-gray-900 md:text-xl">
                    WelCome Back
                </h1>
                <div id="error" className="text-red-600"></div>
                <form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="userid" className="block mb-2 text-sm font-medium text-gray-900 ]">UserId</label>
                        <input type="text" value={userid} onChange={(e)=>setid(e.target.value)} name="userid" id="userid" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="UserId" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
                    </div>
                    <button onClick={login} type="submit" className="w-full text-red-50 bg-indigo-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Enhance Your Knowledge Now</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Dont have an account? <a href="/SignUp" className="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp Here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
    
    </>
  )
}
