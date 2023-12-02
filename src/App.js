import React from 'react';
import Navbar from './Sections/Navbar';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Blogpage from './components/Blogpage';
import Contactpage from './components/Contactpage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
const App=()=>{
  return(
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
          <Route path='/blog' element={<Blogpage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
      </Router>
    </>
  )
};
export default App;
