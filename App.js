import React from 'react'; // Don't forget to import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes

import Header from './components/Header';
import Cards from './components/Cards';
import Addmovie from './components/Addmovie';
import Detail from './components/Detail';

function App() {
  document.title = "AnimeWeb";
  return (
    <div className='relative bg-black'>

       
      <Router> {/* Wrap your components with Router */}
      <Header  />
        <Routes>
          <Route path='/' element={<Cards />} /> {/* Use "element" instead of "component" */}
          <Route path='/addmovie' element={<Addmovie />} /> {/* Use "element" instead of "component" */}
          <Route path='/detail/:id' element={<Detail/>} /> {/* Use "element" instead of "component" */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;