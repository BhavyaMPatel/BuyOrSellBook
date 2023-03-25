import React from "react";


export default function Navbar(){
    const active=()=>{
        let menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
        }

    return (
    <>
    <nav className="shadow-md border-gray-200 border-b-2 flex flex-wrap justify-start items-center md:justify-end  w-full py-4 md:p-2  text-gray-700  fixed z-0 opacity-90 bg-blue-50 top-0 font-Poppins">
    <button onClick={active}><svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="justify-start m-2 h-6 w-6 cursor-pointer md:hidden block"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg></button>
    <div className="hidden w-full md:flex md:items-center md:w-auto font-serif" id="menu">
        <ul className=" m-3 pt-4 text-base gap-0 text-slate-900  font-extrabold md:flex md:justify-between md:pt-0 md:m-0 font-Poppins">
            <li>
                <a className="md:p-4 py-2 block font-extrabold " href="/">WelCome</a>
            </li>
            <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 " href="/buybook">Buy Books</a>
            </li>
            <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 " href="/sellbook">Sell Books</a>
            </li>
            <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 " href="/Cart">Your Cart</a>
            </li>
            <li>
                <a className="md:p-4 py-2 block hover:text-purple-400 text-blue-500 " href="/LogOut">Logout</a>
            </li>   
        </ul>
    </div>
</nav>
    </>
    )
}
