import React from 'react'
import { BrowserRouter as Router, Routes,
    Route } from "react-router-dom";
import Welcome from './components/Welcome'
import Details from './components/Details'
import Tasks from './components/Tasks'
import Garbage from './components/Garbage'
import Hostel from './components/Hostel';
import Verify from './components/Verify'

import Water from './components/Water';
import Leaderboard from './components/Result';
import HostelDetails from './components/Hdetails';
import Vehicle from './components/Vehicle';

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
            <Route path='/Water/:id' element={<Water/>}/>
            <Route path='/result' element={<Leaderboard/>}/>
            <Route path='/vehicle' element={<Vehicle/>}/>
            <Route path='/hostels/:id' element={<HostelDetails/>}/>
           
            </Routes>
        </Router>

    </div>
  )
}
