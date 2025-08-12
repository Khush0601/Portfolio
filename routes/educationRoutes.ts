import express from "express";
import {
  createEducationDetails,
  getEducationDetails,
  editEducationDetails
} from "../controllers/educationController";

const router = express.Router();

router.post("/createEducation", createEducationDetails);
router.get("/getEducations", getEducationDetails);
router.put("/editEducation", editEducationDetails);

export default router;
