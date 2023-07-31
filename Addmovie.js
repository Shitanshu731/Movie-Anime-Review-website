import React from 'react'
import {TailSpin} from 'react-loader-spinner'
import { useState } from 'react'
import {addDoc} from "firebase/firestore";
import { moviesRef } from '../firebase/firebase';
import swal from 'sweetalert'

const Addmovie = () => {
    const[form,setForm] = useState({
        title : "",
        year : "",
        description : "",
        image  : "",
    })
    const[loading, setLoading] =useState(false);
    const addMovie = async ()=>{
        setLoading(true);
        try{
        await addDoc(moviesRef,form);
        swal({
            title : "successfully Added",
            icon : "success",
            buttons : false,
            timmer : 3000
        })
       
    }
    catch(err){
        swal({
        title : err,
        icon : "error",
        buttons : false,

        timer :3000 
        })

    }
    setLoading(false);
    }
    
  return (
    <div>
      <section class="text-gray-600 body-font relative">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Add New Anime</h1>
     
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Title</label>
            <input type="text" id="text" name="text" value={form.title} onChange={(e)=>setForm({...form,title : e.target.value})} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Year</label>
            <input type="text" id="text" name="text" value={form.year} onChange={(e)=>setForm({...form,year : e.target.value})}className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Image Link</label>
            <textarea id="message" name="message"value={form.image} onChange={(e)=>setForm({...form,image : e.target.value})} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-13 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Description</label>
            <textarea id="message" name="message"value={form.description} onChange={(e)=>setForm({...form,description : e.target.value})} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={addMovie} className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg">{loading ? <TailSpin height ={25} color ="white"/>:'Submit'}</button>
        </div>
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Addmovie
