import express from "express";
import {
  createInternshipDetails,
  getInternshipDetails,
  editInternshipDetails
 
} from "../controllers/internshipControllers";

const router = express.Router();

router.post("/createInternshipDetails", createInternshipDetails);
router.get("/getInternshipDetails", getInternshipDetails);
router.patch("/editInternshipDetails", editInternshipDetails);

export default router;
