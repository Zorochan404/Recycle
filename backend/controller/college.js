import College from "../models/college.js";



export const addcollege = async(req, res) =>{
    try {
        const newcollege = new College(req.body)
        const savecollege = await newcollege.save()
        res.status(200).json('user created')
    } catch (error) {
        console.log(error)
    }
}


export const findcollege = async(req, res)=>{
    try {
        const college = await College.find()
        res.status(200).json(college)
    } catch (error) {
        console.log(error)
    }
}



