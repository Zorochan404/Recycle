import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';


const Formw = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
  });



  const navigate = useNavigate()
  const {id} = useParams()




  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic - you can handle form data here
    console.log('Survey answers:', answers);
    alert('Details Submitted')
    navigate(`/tasks/${id}`)

  };

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Survey
        </Typography>
        <form onSubmit={handleSubmit}>
          <Typography variant="body1" gutterBottom>
            Question 1: Amout used for bathing ?
          </Typography>
          <TextField
            label="Answer"
            variant="outlined"
            fullWidth
            name="question1"
            type="number"
            placeholder="Enter your answer in litres"
            value={answers.question1}
            onChange={handleChange}
            required
          />

          <Typography variant="body1" gutterBottom>
            Question 2: Amount used for drinking ?
          </Typography>
          <TextField
            label="Answer"
            variant="outlined"
            fullWidth
            name="question2"
            type="number"
            placeholder="Enter your answer in litres"
            value={answers.question2}
            onChange={handleChange}
            required
          />

          <Typography variant="body1" gutterBottom>
            Question 3: Amount used for washing purpose?
          </Typography>
          <TextField
            label="Answer"
            variant="outlined"
            fullWidth
            name="question3"
            type="number"
            placeholder="Enter your answer in litres"
            value={answers.question3}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Formw;
