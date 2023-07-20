import React from 'react';
import { useState, useEffect } from 'react';
import wetw from '../assets/wetw.jpeg';
import dryw from '../assets/dryw.jpeg';
import garb from '../assets/garb.gif';
import { Button, TextField, Container, Grid } from '@mui/material';
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';








export default function Garbage() {




  const Navigate = useNavigate()
  const { id } = useParams()
  const [drygarbage, setDry] = useState('');
  const [wetgarbage, setWet] = useState('');
  const [wetgcpf, setWetgcpf] = useState('');
  const [drygcpf, setDrygcpf] = useState('');




  const cpf = () => {
    setDrygcpf(0.7 * drygarbage);
    setWetgcpf(0.7* wetgarbage)
  };

  useEffect(() => {
    cpf();
  }, [cpf]);



  
  const handleonSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        drygarbage: drygarbage,
        wetgarbage: wetgarbage,
        drygcfp: drygcpf,
        wetgcfp: wetgcpf
      };

      const response = await axios.put(`http://localhost:8000/api/garbage/${id}`, dataToSend);
      if (response.data) {
        alert('Request Submitted');
        console.log(drygarbage, wetgarbage);
        Navigate(`/tasks/${id}`)
      } else {
        alert('Request Failed');
      }
    } catch (error) {
      alert('Error submitting request.');
      console.error(error);
    }}


  
  

  return (
    <div>
      <div className="flex">
        <img className="welcomeimg" src={garb} alt="garbage" />
        <form onSubmit={handleonSubmit}>
              <div className="dryw">
                <img className="cimg" src={dryw} alt="dry waste" />
          
                  <TextField
                    type="number"
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
                    type="number"
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
