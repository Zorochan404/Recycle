import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const VerifyContent = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [databaseContent, setDatabaseContent] = useState('');
  const [similarity, setSimilarity] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setUploadedImage(event.target.files[0]);
  };

  const handleVerify = async () => {
    if (!uploadedImage) {
      alert('Please select an image to verify.');
      return;
    }

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
        navigate('/');
      } else {
        alert('Document not verified.');
      }
    } catch (error) {
      alert('Error verifying image.');
    }
  };

  return (
    <div>
      <h2>Verify Content</h2>
      <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default VerifyContent;
