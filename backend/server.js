import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv"
import collegerouter from './Routes/college.js'
import hostelrouter from './Routes/hostel.js'
import cors from 'cors';




const app = express()
dotenv.config()



const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.mongo)
        console.log(`connected to ${mongoose.connection.host}`)
    }catch(err){
        console.log(err)
    }
}



app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))
app.use('/api', collegerouter)
app.use('/api', hostelrouter)










connectdb()


app.listen(8000,()=>{
    console.log("Server running on port 8000")
})


