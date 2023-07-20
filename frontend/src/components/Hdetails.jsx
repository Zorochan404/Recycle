import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardHeader } from '@mui/material';

const HostelDetails = () => {
  const { id } = useParams();
  const [hostel, setHostel] = useState();

  useEffect(() => {
    // Fetch the hostel details based on the ID from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/hdetails/${id}`);
        setHostel(response.data);
      } catch (error) {
        console.log('Error fetching hostel details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!hostel) {
    return <div>Loading...</div>; // Add a loading state or animation while fetching data
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card style={{ width: '50vh', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <CardHeader title={hostel.name} />
        <CardContent>
          <Typography variant="body1">Total Carbon Footprint Emitted: {hostel.cfp}</Typography>
          <Typography variant="body1">Carbon Footprint from Water: {hostel.watercfp}</Typography>
          <Typography variant="body1">Carbon Footprint from Electricity: {hostel.electricitycfp}</Typography>
          <Typography variant="body1">Carbon Footprint from Dry-Garbage: {hostel.drygcfp}</Typography>
          <Typography variant="body1">Carbon Footprint from Wet-Garbage: {hostel.wetgcfp}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HostelDetails;
