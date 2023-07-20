import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Button, Container, TextField } from '@mui/material';




const VerifyContent = () => {


    const [electricityBill, setElectricityBill] = useState('');
  const [databaseContent, setDatabaseContent] = useState('');
  const [similarity, setSimilarity] = useState('');
  const navigate = useNavigate();

  const onDrop = async (acceptedFiles) => {
    // In this example, we only accept one file, so we'll take the first one
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
        // Redirect to the home page (replace '/home' with your desired home page URL)
        // navigate('/');
        console.log('Electricity bill:', electricityBill);
      } else {
        alert('Document not verified.');
      }
    } catch (error) {
      alert('Error verifying image.');
    }
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
    </div>
 
  );
};

export default VerifyContent;
