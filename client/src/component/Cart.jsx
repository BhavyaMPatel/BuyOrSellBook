import React from 'react'

export default function Cart({desc,bookname,price}) {
return (
<>
<div className="sm:w-full w-48 max-w-[16rem] max-h-fit bg-slate-100 border-2 border-gray-200 rounded-lg shadow-lg font-Poppins">
    <div>
        <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded  ml-3">{bookname}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 m-2">
            <span className="text-3xl font-bold text-gray-900">₹{price}</span>
        </div>
    </div>
</div>
</>
)}
