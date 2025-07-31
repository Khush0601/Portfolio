import express from "express";
import { createAboutDetails } from "../controllers/aboutController";

const router = express.Router();

router.post('/createAboutDetails',createAboutDetails)

export default router;
