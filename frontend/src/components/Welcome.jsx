import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import '../assets/styles/Welcome.css'
import welcometest from '../assets/welcomeimg.gif'


export default function Welcome() {




  return (
    <>
    <div className='flex'>
        <img className='welcomeimg' src={welcometest}/>
        <div className='welcometext'>
          <h1>WELCOME</h1>
          <p>Waste management is a critical aspect of modern society, aiming to minimize the negative impacts of waste on the environment, public health, and natural resources. The exponential growth of population and urbanization has escalated the production of waste, leading to numerous challenges. The improper handling and disposal of waste pose significant threats to ecosystems, air and water quality, and the overall well-being of living beings. This essay will delve into the importance of waste management, the challenges it presents, and the strategies and innovations that can pave the way for a cleaner and more sustainable future.</p>
          <p>Waste management plays a vital role in preserving the environment and promoting public health. With improper disposal, waste can contaminate soil, water bodies, and the air, leading to severe environmental degradation. Landfills and improper incineration generate harmful greenhouse gases, contributing to climate change. Additionally, waste often harbors hazardous materials that pose health risks to both humans and wildlife.</p>
          <p>Furthermore, waste management is essential for conserving natural resources. By implementing recycling and resource recovery programs, we can reduce the need for virgin materials, lessening the strain on ecosystems and curbing energy consumption. Waste management also presents economic opportunities, as recycling and waste-to-energy initiatives create jobs and stimulate innovation.</p>
        </div>
        </div>
        
        <div className='btn'>
        <Button variant='contained' color ="grey"component={Link} to='/details'>Get Started
        </Button>
        </div>
        </>
  )
}
