import React, { useEffect } from 'react'
import '../assets/styles/Details.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Image1 from '../assets/Image1.png';







export default function Details() {
    const [college, setCollege] = React.useState([]);
    const [selectedCollege, setSelectedCollege] = React.useState('');
      
  useEffect(()=> {
    const fetchcollege = async() =>{
      try {
        const res = await axios.get('http://localhost:8000/api/college')
        const response = res.data
        setCollege(response)
      } catch (error) {
        
      }
    }
    fetchcollege()
  }, [])



  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
  };

  

  return (
    <>
    <div className='flex'>
      <div className='img'>
        <img src={Image1} alt='recycle-img'/>
        <h1>Take a step with us to make this world a better place</h1>
      </div>
      <div className='menu'>
        <Box sx={{ maxWidth: 500, minWidth: 400 }}>
          <h2>SELECT YOUR COLLEGE</h2>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select college</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCollege || ''} // Set a default value of ''
              onChange={handleCollegeChange}
            
        >

          {college.map((college)=>{
            const {_id, name} = college
          return(
            <MenuItem key={_id} value={_id } component={Link} to={`/hostel/${_id}`}>{name}</MenuItem>
          )
          })}
        </Select>
        </FormControl>
        </Box>
        </div>
    </div>

    
    </>
  )
}
