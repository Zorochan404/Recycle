import mongoose from "mongoose";




const hostelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
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
    },
    wetgcfp:{
        type:Number,
        default: 0
    },
    drygcfp:{
        type:Number,
        default: 0
    },
    vehiclecfp:{
        type:Number,
        default: 0
    },
    electricitycfp:{
        type:Number,
        default: 0
    },
    watercfp:{
        type:Number,
        default: 0
    }
    
})


const hostel = mongoose.model('hostel', hostelSchema);

export default hostel