import express from "express";
import { createSkillsDetails,getAllSkills } from "../controllers/skillController";

const router = express.Router();

router.post('/createSkillDetails',createSkillsDetails)
router.get("/getAllSkills", getAllSkills);
export default router;
