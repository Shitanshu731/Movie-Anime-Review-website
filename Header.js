import AddIcon from '@mui/icons-material/Add';
import React from 'react'

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className ='sticky top-0 z-50 text-3xl flex justify-between text-red-500 font-bold p-3 border-b-2 bg-yellow-400'>
      <Link to ={'/'}><span className='text-white'>Anime<span className='text-red-500'>Web</span></span></Link>
      <Link to={'Addmovie'}><h1 className=' text-red-600'>
        <button className = 'flex items-center'>
      <AddIcon className ='mr-2 text-red-500 cursor-pointer hover:bg-slate-100'color='inherit' />
        Add New
        </button>
      </h1></Link>
      
    </div>
  )
}

export default Header;