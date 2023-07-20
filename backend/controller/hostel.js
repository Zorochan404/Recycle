import Hostel from "../models/hostel.js";



export const addhostel = async(req, res) =>{
    const newhostel = new Hostel({hostelid:req.param.id,...req.body})
    try {
        
        const savehostel = await newhostel.save()
        res.status(200).json('user created')
    } catch (error) {
        console.log(error)
    }
}



export const findhostel = async(req, res)=>{
    const {id} = req.params;
    try {
        const hostel = await Hostel.find({collegeid: {$in: id}})
        res.status(200).json(hostel)
    } catch (error) {
        console.log(error)
    }
}



export const updatedrygarbage = async(req, res) => {
    try {

       const {watercfp,electricitycfp,drygcfp,wetgcfp, cfp} = req.body;
       const hostel = await Hostel.findById(req.params.id)
       if (!hostel) {
        return res.status(404).json({ error: 'Hostel not found' });
      }else{
        hostel.drygcfp += Number(drygcfp)
        hostel.wetgcfp += Number(wetgcfp)
        hostel.cfp = hostel.watercfp + hostel.electricitycfp + hostel.drygcfp + hostel.wetgcfp



        const updatehostel = await hostel.save()
        res.status(200).json(updatehostel)
       } 
    }catch (error) {
        console.log(error)
    }
}

export const updateelectricity = async(req, res) => {
    try {

       const {watercfp,electricitycfp,drygcfp,wetgcfp, cfp} = req.body;
       const hostel = await Hostel.findById(req.params.id)
       if (!hostel) {
        return res.status(404).json({ error: 'Hostel not found' });
      }else{
        hostel.electricitycfp += Number(electricitycfp);
        hostel.cfp = hostel.watercfp + hostel.electricitycfp + hostel.drygcfp + hostel.wetgcfp


        const updatehostel = await hostel.save()
        res.status(200).json(updatehostel)
       } 
    }catch (error) {
        console.log(error)
    }
}


export const updatewater = async(req, res) => {
    try {

       const {watercfp,electricitycfp,drygcfp,wetgcfp, cfp} = req.body;
       const hostel = await Hostel.findById(req.params.id)
       if (!hostel) {
        return res.status(404).json({ error: 'Hostel not found' });
      }else{
        hostel.watercfp += Number(watercfp);
        hostel.cfp = hostel.watercfp + hostel.electricitycfp + hostel.drygcfp + hostel.wetgcfp


        const updatehostel = await hostel.save()
        res.status(200).json(updatehostel)
       } 
    }catch (error) {
        console.log(error)
    }
}


export const findcfp = async(req, res)=>{
    try {
        const cfp = req.body.cfp
        const hostel = await Hostel.find()
        res.status(200).json(hostel)
    } catch (error) {
        console.log(error)
    }
}

export const findhdetails = async(req, res)=>{
    try {
        
        const hostel = await Hostel.findOne({_id: req.params.id})
        res.status(200).json(hostel)
    } catch (error) {
        console.log(error)
    }
}


