import express from "express";
import {
  createInternshipDetails,
 
} from "../controllers/internshipControllers";

const router = express.Router();

router.post("/createInternshipDetails", createInternshipDetails);


export default router;
