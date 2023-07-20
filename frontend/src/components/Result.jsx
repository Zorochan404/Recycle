import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom'

const Leaderboard = () => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/result');
        const sortedHostels = response.data.sort((a, b) => a.cfp - b.cfp); // Sort hostels by cfp in ascending order
        setHostels(sortedHostels);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <TableContainer component={Paper}>
      <Table>
  <TableHead>
    <TableRow>
      <TableCell>Rank</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>CFP</TableCell>
      <TableCell>Details</TableCell> 
    </TableRow>
  </TableHead>
  <TableBody>
    {hostels.map((hostel, index) => (
      <TableRow key={hostel._id}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{hostel.name}</TableCell>
        <TableCell>{hostel.cfp}</TableCell>
        <TableCell>
          <Button component={Link} to={`/hostels/${hostel._id}`} aria-label="details">
            Details
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

      </TableContainer>
    </div>
  );
};

export default Leaderboard;
