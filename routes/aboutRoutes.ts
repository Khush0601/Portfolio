import express from "express";
import { createAboutDetails,getAboutDetails,editAboutDetails } from "../controllers/aboutController";

const router = express.Router();

router.post('/createAboutDetails',createAboutDetails)
router.get('/getAboutDetails',getAboutDetails)
router.patch('/editAboutDetails',editAboutDetails)
export default router;
