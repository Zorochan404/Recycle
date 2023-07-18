import express from "express";
import { addhostel, findhostel, updatewetgarbage } from "../controller/hostel.js";




const router = express.Router()



router.post('/hostel/:id', addhostel)



router.get('/hostel/:id', findhostel)



router.put('/garbage/:id', updatewetgarbage)



export default router;