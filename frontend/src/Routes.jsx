import React from 'react'
import { BrowserRouter as Router, Routes,
    Route } from "react-router-dom";
import Welcome from './components/Welcome'
import Details from './components/Details'
import Tasks from './components/Tasks'
import Garbage from './components/Garbage'
import Hostel from './components/Hostel';
import Verify from './components/Verify'
import Cfpelectricity from './components/Cfpelectricity';

export default function Link() {
  return (
    <div>
        <Router>
            <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/hostel/:id' element={<Hostel/>}/>
            <Route path='/tasks/:id' element={<Tasks/>}/>
            <Route path='/garbage/:id' element={<Garbage/>}/>
            <Route path='/verify/:id' element={<Verify/>}/>
            <Route path='/cfpelectricity' element={<Cfpelectricity/>}/>
            </Routes>
        </Router>

    </div>
  )
}
