import express from "express";
import {
  createCertification,
  getCertifications,
  editCertification
} from "../controllers/certificationController";

const router = express.Router();

router.post("/createCertification", createCertification);
router.get("/getCertifications", getCertifications);
router.put("/editCertification", editCertification);

export default router;