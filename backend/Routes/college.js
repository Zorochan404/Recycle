import express from "express";
import { addcollege, findcollege } from "../controller/college.js";




const router = express.Router()



router.post('/college', addcollege)


router.get('/college', findcollege)



export default router;