import React from 'react'

export default function BuyCard({user,src,desc,price,bookname,pid,saveCart,addToCart}) {
return (
    <>
    <div className="sm:w-full w-48 max-w-[16rem] max-h-fit bg-slate-100 border-2 border-gray-100 rounded-lg shadow-lg font-Poppins">
        <div className='flex justify-center m-2 '>
        <img className="border-red border-solid border-2 rounded-md object-cover h-[30vh] w-[25vh]" src={src} alt="productimage" />
        </div>
    <div className="px-5 pb-5 mt-5">
        <div className='h-[18vh] overflow-clip'>
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{desc}</h5>
        </div>
    </div>

    <div>
        <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded  ml-3">{bookname}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 m-2">
            <span className="text-3xl font-bold text-gray-900">₹{price}</span>
            <button onClick={()=>{addToCart(user,pid,price,bookname)}} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
        </div>
    </div>
</div>
    
</>
)}
