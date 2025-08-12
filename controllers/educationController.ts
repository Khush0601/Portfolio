import { Request, Response } from "express";
import EducationModel from "../models/educationModel";

export const createEducationDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const educationData = req.body;

    const savedEducation = await EducationModel.create(educationData);

    res.status(201).json({
      message: "Education created successfully",
      data: savedEducation,
    });
  } catch (error) {
    console.error("Error creating education:", error);
    res.status(500).json({
      message: "Failed to create education",
      error,
    });
  }
};

export const getEducationDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const educationList = await EducationModel.find();

    res.status(200).json({
      message: "Education details fetched successfully",
      data: educationList,
    });
  } catch (error) {
    console.error("Error fetching education details:", error);
    res.status(500).json({
      message: "Failed to fetch education details",
      error,
    });
  }
};



export const editEducationDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, ...updatedData } = req.body;
    
    if (!id) {
      res.status(400).json({ message: "Education ID is required in body" });
      return;
    }

    const updatedEducation = await EducationModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedEducation) {
      res.status(404).json({ message: "Education record not found" });
      return;
    }

    res.status(200).json({
      message: "Education updated successfully",
      data: updatedEducation,
    });
  } catch (error) {
    console.error("Error updating education:", error);
    res.status(500).json({
      message: "Failed to update education",
      error,
    });
  }
};

