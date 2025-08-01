import express from "express";
import {
  createProjectDetails,
  getProjectDetails,
  editProjectDetails
} from "../controllers/projectController";

const router = express.Router();

router.post("/createProject", createProjectDetails);
router.get("/getProjects", getProjectDetails);
router.put("/editProject", editProjectDetails);

export default router;
