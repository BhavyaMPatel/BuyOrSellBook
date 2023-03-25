import React from 'react'

export default function HomePage() {
    return (
        <>
            <div className='flex flex-wrap sm:mx-20  h-fit items-center font-Poppins mt-10'>
                <div className='w-full sm:w-1/2 sm:p-2 p-5 h-[45vh] flex justify-center items-center'>
                    <div className='text-[#183b56] text-3xl md:text-4xl lg:text-5xl font-navbody font-semibold'>
                       <div className='flex justify-start'> Wel-Come To </div>
                       <div className='flex justify-statr'> Buy Or Sell Book </div>
                       <div className="text-[#577592] mt-2 tracking-wide flex justify-start text-base md:text-lg lg:text-xl font-navbody font-normal">
                       BuyOrSellBook - The One And Only Place To Sell And Buy Second Hand Book On Single Click And Easily From Anywhere Because Learning Has No Limit
                       </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
                    <img className='h-[40vh] sm:h-[50vh] md:h-[60vh]' src='/files/Background.png' alt='Navbackground'/>
                </div>
            </div>


            <div className='flex flex-wrap-reverse sm:mx-20 m-2 h-fit items-center sm:mt-5 md:mt-7 font-Poppins'>
                <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
                        <img className='h-4/5' src='/files/Downloads.png' alt='Navbackground'/>
                </div>
                <div className='w-full sm:w-1/2 sm:p-2 p-5 mt-5 h-[45vh] flex justify-center items-center'>
                    <div className='text-[#183b56] text-3xl md:text-4xl lg:text-4xl font-navbody text font-semibold'>
                       <div className='flex justify-start'> Buy Books </div>
                       <div className="text-[#577592] mt-2 mb-2 tracking-wide flex justify-start text-base md:text-base lg:text-lg font-navbody font-normal">
                        Buy Section Is A Place From Where You Will Get All Types Of Books That Are Available
                        </div>
                       <a href="/buybook" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Download</a>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap sm:mx-20  h-fit items-center sm:mt-7 md:mt-10 mb-5'>
                <div className='w-full sm:w-1/2 sm:p-2 p-10 h-[45vh] flex justify-end items-center'>
                <div className='mt-5 text-[#183b56] text-3xl md:text-5xl lg:text-5xl font-navbody text font-semibold'>
                       <div className='flex justify-start'> Sell Your Books </div>
                       <div className="text-[#577592] mt-2 mb-2 tracking-wide flex justify-start text-base md:text-base lg:text-lg font-navbody font-normal">
                        Sell Your Book With Us So That You Can Reach Out To Best Customer And Also Become Part Of Community , Make Sure You Write Best Description About Your Book So It Reach Out To the Best Customers 
                       </div>
                       <a href="/sellbook" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Sell Now !</a>
                       </div>
                </div>
                <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
                    <img className='h-4/5' src='/files/About-Us.png' alt='Navbackground'/>
                </div>
            </div>
            
        </>
    )
}
