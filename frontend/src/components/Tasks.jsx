import React from 'react'
import Button from '@mui/material/Button'
import { Link, useParams } from 'react-router-dom';
import garbage from "../assets/garbage.jpeg"
import vehicle from "../assets/vehicle.jpeg"
import electriciy from "../assets/electricity.jpeg"
import water from "../assets/water.jpeg"






export default function Tasks() {




  const {id} = useParams()



  return (
    <>
    <div className='text'>
      <h1>TASKS</h1>
      </div>
      <div className="flex">

      <div className="garbage">
        <img className='cimg' src={garbage}/>
        <div className="container">
    <Button  variant='contained' color="grey" key={id} component={Link} to={`/garbage/${id}`}>Garbage
        </Button>
        </div>
        </div>

        <div className="vehicle">
        <img className='cimg' src={vehicle}/>
        <div className="container">
        <Button variant='contained' color="grey" component={Link} to={'/vehicle'}>Vehicle
        </Button>
        </div>
        </div>

        <div className="electricity">
        <img className='cimg' src={electriciy}/>
        <div className="container">
        <Button variant='contained' color="grey" key={id} component={Link} to={`/verify/${id}`}>Electricity
        </Button>
        </div>
        </div>


        <div className="water">
        <img className='cimg' src={water}/>
        <div className="container">
        <Button variant='contained' color="grey" component={Link} to={`/water/${id}`}>Water
        </Button>
        </div>
        </div>
        </div>
    </>
  )
}
