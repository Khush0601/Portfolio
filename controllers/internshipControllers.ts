import { Request, Response } from "express";
import InternshipModel from "../models/internshipModel";

export const createInternshipDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const internshipData = req.body;

    const savedInternship = await InternshipModel.create(internshipData);

    res.status(201).json({
      message: "Internship created successfully",
      data: savedInternship,
    });
  } catch (error) {
    console.error("Error creating internship:", error);
    res.status(500).json({
      message: "Failed to create internship",
      error,
    });
  }
};

export const getInternshipDetails = async (_req: Request, res: Response): Promise<void> => {
  try {
    const internships = await InternshipModel.find();

    res.status(200).json({
      message: "Internships fetched successfully",
      data: internships,
    });
  } catch (error) {
    console.error("Error fetching internships:", error);
    res.status(500).json({
      message: "Failed to fetch internships",
      error,
    });
  }
};

export const editInternshipDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, ...updatedData } = req.body;
    
    if (!id) {
      res.status(400).json({ message: "Internship ID is required in body" });
      return;
    }

    const updatedInternship = await InternshipModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedInternship) {
      res.status(404).json({ message: "Internship not found" });
      return;
    }

    res.status(200).json({
      message: "Internship updated successfully",
      data: updatedInternship,
    });
  } catch (error) {
    console.error("Error updating internship:", error);
    res.status(500).json({
      message: "Failed to update internship",
      error,
    });
  }
};