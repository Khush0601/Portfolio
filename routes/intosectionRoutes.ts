import express from "express";
import {
  createIntroSection,
  getIntroSection,
  editIntroSection
} from "../controllers/introsectionController";

const router = express.Router();

router.post("/createIntroSection", createIntroSection);
router.get("/getIntroSection", getIntroSection);
router.put("/editIntroSection", editIntroSection);

export default router;
