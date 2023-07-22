import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Button, Container, TextField } from '@mui/material';




const VerifyContent = () => {



    const [waterBill, setWaterBill] = useState('');
  const [databaseContent, setDatabaseContent] = useState('');
  const [similarity, setSimilarity] = useState('');
  const [watercfp, setWatercfp] = useState('');
  const [waterl, setWaterl] = useState('');
  const [cfpll, setCfpll] = useState('');
  const [alertt, setAlertt] = useState('');
  const Navigate = useNavigate();




  
  const target =()=>{
    if (cfpll<= 19.58) {
      setAlertt('You have acheived your goal')
    } else {
      setAlertt('You have acheived your goal')
    }
  }

  useEffect(() => {
    target();
  }, [cfpll]);

  const calculatewaterCFP = () => {
    setWaterl(125* waterBill)
    setWatercfp(0.037 * waterBill);
    setCfpll(0.03* waterBill)
  };

  useEffect(() => {
    calculatewaterCFP();
  }, [waterBill]);



  const {id} = useParams()




 






  const onDrop = async (acceptedFiles) => {


    
    const uploadedImage = acceptedFiles[0];

    const formData = new FormData();
    formData.append('image', uploadedImage);



    try {
      const response = await axios.post('http://localhost:8001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });




      setDatabaseContent(response.data.content);
      setSimilarity(response.data.similarity);

      if (response.data.similarity > 0.5) {
        alert('Document Verified!');
      
        console.log('water bill:', waterBill);

      } else {
        alert('Document not verified.');
      }


      const dataToSend = {
        watercfp: watercfp
      };
      const res = await axios.put(`http://localhost:8000/api/water/${id}`, dataToSend);
      if (res.data) {
        alert('Request Submitted');
        alert(alertt)
      } else {
        alert('Request Failed');
      }
    } catch (error) {
      alert('Error verifying image.');
    }
    Navigate(`/formw/${id}`)
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
        <h2>Enter Your water Bill</h2>
        <form onSubmit={onDrop}>
      <Container>
        <TextField
          type="number"
          label="Water Bill in Rupees"
          placeholder="Bill in Rupees"
          variant="outlined"
          onChange={(e) => setWaterBill(e.target.value)}
          fullWidth
        />
      </Container>
      <h2>Verify Content</h2>
      
      <div
        {...getRootProps()}
        style={{
            width: '500px',
          border: '2px dashed #ccc',
          borderRadius: '4px',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#eee' : 'inherit',
        }}
      >
        
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Drag and drop an image here, or click to select an image</p>
        )}
      </div>
   
      
        <div className="btnesub">
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        </div>
      </form>
      <div>
        <h2>Carbon Footprint Emitted</h2>
        <h3>{watercfp}KG</h3>
        <h3>Your target for the month: {cfpll}KG</h3>
        <h3>Your last month carbon emission target was: 19.68KG </h3>
      </div>
    </div>
 
  );
};

export default VerifyContent;
