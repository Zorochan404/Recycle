import mongoose from "mongoose";




const hostelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        unique: true
    }, 
    collegeid:{
        type:String,
        required: true

    },
    wetgarbage:{
        type:Number,
        default:0
    },
    drygarbage:{
        type:Number,
        default:0
    }
    
})


const hostel = mongoose.model('hostel', hostelSchema);

export default hostel