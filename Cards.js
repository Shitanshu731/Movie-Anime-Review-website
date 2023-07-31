import React, { useEffect, useState } from "react";
import ReactStars from 'react-stars'
import {ThreeDots} from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef} from "../firebase/firebase";
import { Link } from "react-router-dom";


const Cards = () => {
  const [data, setData] = useState([]);
  const[loading,setLoading] = useState(false);
  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc)=>{
        setData((prv)=>[...prv,{...(doc.data()),id: doc.id}])
      })
setLoading(false); 
    }
    getData();
  },[])
  

  return (
    <div className="flex flex-wrap justify-evenly p-3 mt-2">
      {loading ? <ThreeDots height={40} color="white" /> : 
      data.map((e, i) => (
        <Link to ={`/detail/${e.id}`}><div key={i} className=" card p-2 mr-2 ml-2 hover:-translate-y-2 mt-7 transhition-all duration-500">
          <img
            className="h-72"
            src={e.image}
            alt={`Poster of ${e.title}`}
          />
          <h1 className="text-white w-48 ">
            <span className="text-slate-500">Title :</span>
            {e.title}
          </h1>
          <h1 className="text-white">
            <span className="text-slate-500">Rating :</span> {e.rating}
          </h1>
          <ReactStars
          size={20}
          half={true}
          edit={false}
          value={3.5} />
          <h1 className="text-white">
            <span className="text-slate-500">Year :</span> {e.year}
          </h1>
        </div>
        </Link>
      ))
}
    </div>
  );
};

export default Cards;