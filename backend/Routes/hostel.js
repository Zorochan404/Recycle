import express from "express";
import { addhostel, findcfp, findhdetails, findhostel, updatedrygarbage, updateelectricity, updatewater } from "../controller/hostel.js";




const router = express.Router()



router.post('/hostel/:id', addhostel)



router.get('/hostel/:id', findhostel)

router.get('/hdetails/:id', findhdetails)



router.put('/garbage/:id', updatedrygarbage)


router.put('/electricity/:id', updateelectricity)


router.put('/water/:id', updatewater)

router.get('/result', findcfp)








export default router;