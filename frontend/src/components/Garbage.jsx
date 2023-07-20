import React from 'react';
import { useState } from 'react';
import wetw from '../assets/wetw.jpeg';
import dryw from '../assets/dryw.jpeg';
import garb from '../assets/garb.gif';
import { Button, TextField, Container, Grid } from '@mui/material';
import { useNavigate, useParams} from 'react-router-dom';








export default function Garbage() {




  const Navigate = useNavigate()
  const { id } = useParams()
  const [dry, setDry] = useState('');
  const [wet, setWet] = useState('');

  const handleonSubmit = (e) => {
    e.preventDefault();
    alert('Request Submitted');
    console.log(dry, wet);
    Navigate(`/tasks/${id}`)
  };

  return (
    <div>
      <div className="flex">
        <img className="welcomeimg" src={garb} alt="garbage" />
        <form onSubmit={handleonSubmit}>
              <div className="dryw">
                <img className="cimg" src={dryw} alt="dry waste" />
          
                  <TextField
                    type="text"
                    label="Dry Waste in Kg"
                    variant="outlined"
                    onChange={(e) => {
                      setDry(e.target.value);
                    }}
                    fullWidth
                  />
    
              </div>
     
        
              <div className="wetw">
                <img className="cimg" src={wetw} alt="wet waste" />
             
                  <TextField
                    type="text"
                    label="Wet Waste in Kg"
                    variant="outlined"
                    onChange={(e) => {
                      setWet(e.target.value);
                    }}
                    fullWidth
                  />
         
              </div>
 
          <Button type="submit" variant="contained" color="grey">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
