import React from 'react'
// import Button from '@mui/material/Button'
import { useState } from 'react';








export default function Garbage() {

    const[dry, setDry] = useState("")
    const[wet, setWet] = useState("")



    const handleonSubmit = (e) =>{
        e.preventDefault()
        alert("Request Submitted")
        console.log(dry, wet)
    }


  return (
    <div>
        <form onSubmit={handleonSubmit}>
        <input type='text' placeholder='Dry Waste in Kg' onChange={(e)=>{setDry(e.target.value)}}></input>
        <input type='text' placeholder='Wet Waste in Kg' onChange={(e)=>{setWet(e.target.value)}}></input>



        <button type='Submit'>Submit
        </button>
        </form>
    </div>
  )
}
