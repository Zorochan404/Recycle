import React, { useEffect } from 'react'
import '../assets/styles/Hostel.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Image2 from '../assets/a9473ffd0c.jpeg'

export default function Hostel() {



  const { id } = useParams();



    const [hostel, setHostel] = React.useState([]);
    const [selectedhostel, setSelectedhostel] = React.useState('');
      
  useEffect(()=> {
    const fetchhostel = async() =>{
      try {
        const res = await axios.get(`http://localhost:8000/api/hostel/${id}`)
        const response = res.data
        setHostel(response)
      } catch (error) {
        
      }
    }
    fetchhostel()
  }, [])



  const handlehostelChange = (event) => {
    setSelectedhostel(event.target.value);
  };





  return (
    <div>
        <div className='flex'>
        <div className='img'>
          <img src={Image2} alt="recycle-img"></img>
          <h1>Recycling is a powerful act that breathes new life into discarded materials</h1>
        </div>
        <div className='menu'>
        <Box sx={{ minWidth: 400, maxWidth:500  }}>
          <h2>SELECT YOUR HOSTEL</h2>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Hostel</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handlehostelChange}
            value={selectedhostel}
        >


          {hostel.map((hostels)=>{
            const {_id, name} = hostels
          return(

            <MenuItem key ={_id} value={_id } component={Link} to={`/login/${_id}`}>{name}</MenuItem>
          )})}
         
        </Select>
        </FormControl>
        </Box>
        </div>
    </div>
    </div>
  )
}
