import mongoose from "mongoose";




const collegeSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
      },
    name:{
        type: String,
        required:true,
        unique: true
    }
})


const college = mongoose.model('college', collegeSchema);

export default college