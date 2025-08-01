import { Request, Response } from "express";
import CertificationModel from "../models/certificationModel";

export const createCertification = async (req: Request, res: Response): Promise<void> => {
  try {
    const certificationData = req.body;

    const saveCertification = await CertificationModel.create(certificationData);

    res.status(201).json({
      message: "Certification created successfully",
      data: saveCertification,
    });
  } catch (error) {
    console.error("Error creating certification:", error);
    res.status(500).json({
      message: "Failed to create certification",
      error,
    });
  }
};

export const getCertifications = async (req: Request, res: Response): Promise<void> => {
  try {
    const certifications = await CertificationModel.find();

    res.status(200).json({
      message: "Certifications fetched successfully",
      data: certifications,
    });
  } catch (error) {
    console.error("Error fetching certifications:", error);
    res.status(500).json({
      message: "Failed to fetch certifications",
      error,
    });
  }
};



export const editCertification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, ...updatedData } = req.body;

    if (!id) {
      res.status(400).json({ message: "Certification ID is required in body" });
      return;
    }

    const updatedCertification = await CertificationModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedCertification) {
      res.status(404).json({ message: "Certification not found" });
      return;
    }

    res.status(200).json({
      message: "Certification updated successfully",
      data: updatedCertification,
    });
  } catch (error) {
    console.error("Error updating certification:", error);
    res.status(500).json({
      message: "Failed to update certification",
      error,
    });
  }
};