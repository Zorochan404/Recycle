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


export const updatewetgarbage = async(req, res) => {
    try {

        const {wetgarbage} = req.body;
       const hostel = await Hostel.findById(req.params.id)
       if (!hostel) {
        return res.status(404).json({ error: 'Hostel not found' });
      }
        hostel.wetgarbage += wetgarbage
        const updatehostel = await hostel.save()
        res.status(200).json(updatehostel)
       } catch (error) {
        console.log(error)
    }
}