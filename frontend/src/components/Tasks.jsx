import React from 'react'
import Button from '@mui/material/Button'
import { Link, useParams } from 'react-router-dom';






export default function Tasks() {




  const {id} = useParams()



  return (
    <>
    <div className='text'>Tasks</div>
    <Button variant='contained' color="grey" key={id} component={Link} to={`/garbage/${id}`}>Garbage
        </Button>
        <Button variant='contained' color="grey">Vehicle
        </Button>
        <Button variant='contained' color="grey">Electricity
        </Button>
        <Button variant='contained' color="grey">Water
        </Button>
    </>
  )
}
