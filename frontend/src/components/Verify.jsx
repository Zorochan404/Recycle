import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Button, Container, TextField } from '@mui/material';




const VerifyContent = () => {



    const [electricityBill, setElectricityBill] = useState('');
  const [databaseContent, setDatabaseContent] = useState('');
  const [similarity, setSimilarity] = useState('');
  const [electricitycfp, setElectricitycfp] = useState('');
  const [cfpl, setCfpl] = useState('');
  const Navigate = useNavigate();



  const calculateElectricityCFP = () => {
    setElectricitycfp(0.23 * electricityBill);
    setCfpl(0.207 * electricityBill)
  };

  useEffect(() => {
    calculateElectricityCFP();
  }, [electricityBill]);



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
      
        console.log('Electricity bill:', electricityBill);

      } else {
        alert('Document not verified.');
      }


      const dataToSend = {
        electricitycfp: electricitycfp
      };
      const res = await axios.put(`http://localhost:8000/api/electricity/${id}`, dataToSend);
      if (res.data) {
        alert('Request Submitted');
      } else {
        alert('Request Failed');
      }
    } catch (error) {
      alert('Error verifying image.');
    }
    Navigate(`/forme/${id}`)
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
        <h2>Enter Your Electricity Bill</h2>
        <form onSubmit={onDrop}>
      <Container>
        <TextField
          type="number"
          label="Electricity Bill"
          placeholder="Bill in Rupees"
          variant="outlined"
          onChange={(e) => setElectricityBill(e.target.value)}
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
        <h3>{electricitycfp}KG</h3>
        <h3>Your target for the month: {cfpl}KG</h3>
        <h2>Tips to reduce Carbon Footprint</h2>
        <h3>1. For 10 hour reduced usage of fan can reduce 1KG CO2</h3>
        <h3>2. For 10 hour reduced in charging can reduce 1KG CO2</h3>
      </div>
    </div>
 
  );
};

export default VerifyContent;
