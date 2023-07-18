import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import '../assets/styles/Welcome.css'
import Image0 from '../assets/1902012.jpg'


export default function Welcome() {




  return (
    <div>
        <div className='btn'>
        <Button variant='contained' color='grey' component={Link} to='/details'>Get Started
        </Button>
        </div>
    </div>
  )
}
