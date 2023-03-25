import React, { useEffect,useState } from 'react'
import jwtDecode from 'jwt-decode'

export default function BuyCard(props) {
  var formData = new FormData();
  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token){
      const user =jwtDecode(token)
      if(!user){
        localStorage.removeItem('token')
        window.location.href='/login'
      }else{
        setUserID(user.userid);
      }
    }else{
      window.location.href='/login'
    }
  },[]);



const [FirstName,setFirstName]=useState('');
const [LastName,setLastName]=useState('');
const [BookName,setBookName]=useState('');
const [Textarea, setTextarea] = useState('');
const [Price, setPrice] = useState('');
const [Select, setSelect] = useState('');
const [Src, setSrc] = useState('');
const [UserId, setUserID] = useState('');

// const [mailid,setmailid]=useState('');
// const [password,setpassword]=useState('');

async function reg(event){

  
  event.preventDefault() // prevent default for refeshing
  formData.append("UserId", UserId);
  formData.append("FN", FirstName);
  formData.append("LN", LastName);
  formData.append("BN", BookName);
  formData.append("TA", Textarea);
  formData.append("PR", Price);
  formData.append("SL", Select);
  formData.append("image", Src);
  const responce=await fetch('http://localhost:5000/sell',{
    method:'POST',
    // headers:{
    //   'Content-Type': 'multipart/form-data', 
    //   // 'Content-Type': 'application/json'
    //  },
    body: formData
  })

  const data= await responce.json();
  console.log(data);

  if(data.book){
    alert("You Book Already Uploaded !")
    window.location.href='/buybook'
  }else{
    window.location.href='/buybook'
  }

  }


  return (
    <>
    <form onSubmit={reg}>
    <div className="ml-2 sm:w-full w-60 max-w-[55rem] max-h-fit bg-white border border-gray-200 rounded-lg shadow-lg ">
      <div className='m-2'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-Poppins text-gray-900">First name</label>
            <input type="text" id='first_name' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required/>
      </div>
      <div className='m-2'>
            <label htmlFor="last_name" className="block mb-2 text-sm font-Poppins text-gray-900 ">Last name</label>
            <input type="text" id="last_name" value={LastName} onChange={(e)=>setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required/>
      </div>
      <div className='m-2'>
            <label htmlFor="book_name" className="block mb-2 text-sm font-Poppins text-gray-900">Book name</label>
            <input type="text" id="book_name" value={BookName} onChange={(e)=>setBookName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Book Name" required/>
      </div>
      {/* <div>
            <label className="m-2 block text-sm font-Poppins leading-6 text-gray-900">Cover photo</label>
              <div className="m-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-Poppins text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
      </div> */}
  <div className="m-2 ">
    <label htmlFor="book_pic" className="block mb-2 text-sm font-Poppins text-gray-900">Cover Photo</label>
    <input
      className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
      type="file"
      accept="image/*"
      id="book_pic"
      name='image'
      onChange={(e)=>setSrc(e.target.files[0])} />
</div>

<div className='m-2'>
            <label htmlFor="book_price" className="block mb-2 text-sm font-Poppins text-gray-900">Book Price</label>
            <input type="text" id="book_price" value={Price} onChange={(e)=>setPrice(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Book Pricex" required/>
</div>

<label htmlFor="countries" className="m-2 block mb-2 text-sm font-Poppins text-gray-900 dark:text-white">Select an Category</label>
  <select id="countries" value={Select} onChange={(e)=>setSelect(e.target.value)} required className="m-2 overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
    <option value="">Choose a Category</option>
    <option value="SB">School Book</option>
    <option value="CB">College Book</option>
    <option value="CE">Competitive Exam</option>
    <option value="MI">Miscellaneous</option>
  </select>
<label htmlFor="message" className="m-2 block mb-2 text-sm font-Poppins text-gray-900 dark:text-white">Book Discription in 100 words</label>
<textarea value={Textarea} onChange={(e)=>setTextarea(e.target.value)} id="message" rows="4" maxLength="100" className="m-2  p-2.5 w-48 sm:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your book description here..."></textarea>
  
<div className="flex flex-wrap items-center justify-between gap-2 m-2">
    <input type='submit' className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
</div>
</div>
</form>
    </>
  )
}
