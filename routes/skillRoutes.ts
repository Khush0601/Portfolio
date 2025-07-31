import express from "express";
import { createSkillsDetails,getAllSkills,editSkill } from "../controllers/skillController";

const router = express.Router();

router.post('/createSkillDetails',createSkillsDetails)
router.get("/getAllSkills", getAllSkills);
router.patch("/editSkill", editSkill);
export default router;
