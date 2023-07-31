import React from 'react'
import {useState} from 'react'
import { reviewsRef } from '../firebase/firebase'
import {  doc, addDoc, updateDoc, LoadBundleTask } from 'firebase/firestore'
import ReactStars from 'react-stars'
import { TailSpin, ThreeCircles } from 'react-loader-spinner'
import swal from 'sweetalert'
import { db } from '../firebase/firebase'

const Reviews = ({id,prevRating,userRated}) => {
    const [rating, setRating] =useState(0);
    const[form,setForm]=useState("");
    const [loading, setLoading] = useState(false);
    const sendReview = async ()=>{
        setLoading(true);
        try{
            await addDoc(reviewsRef,{
                movieid : id,
                name : "shitanshu sahu",
                rating: rating,
                thought : form,
                timestamp : new Date().getTime()
            })
            const ref = doc(db,"reviews",id);
            
            setForm(" ");
            setRating(0);

            swal({
                title : "Review Sent",
                icon : "success",
                buttons  : false,
                timer : 3000
            })
        } catch (error){
            swal({
                title : error.message,
                icon : "error",
                buttons  : false,
                timer : 3000
            })
        }
        setLoading(false);
    }
  return (
    <div className= 'mt-36 border-t-2 text-blackd border-gray-700 w-full'>
         
        <ReactStars 
        size ={30}
        half = {true}
        value={rating}
        onChange={(rate)=>setRating(rate)}
        />
        <input
        value ={form}
        onChange={(e)=>setForm(e.target.value)}
        placeholder = "Enter your thoughts..."
        className ='w-full p-2 outline-none header text-black '
        />
        <button onClick = {sendReview} className = 'bg-green-600 flex justify-center w-full p-2'>
        {loading ? <TailSpin height ={25} color ="white"/>:'Submit'} 
        </button>
  
    </div>
  
  )
}

export default Reviews
