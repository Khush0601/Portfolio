import { Request, Response } from "express";
import IntroSectionModel from "../models/introsectionModel";

export const createIntroSection = async (req: Request, res: Response): Promise<void> => {
  try {
    const introSectionData = req.body;

    const savedIntroSection = await IntroSectionModel.create(introSectionData);

    res.status(201).json({
      message: "Intro section created successfully",
      data: savedIntroSection,
    });
  } catch (error) {
    console.error("Error creating intro section:", error);
    res.status(500).json({
      message: "Failed to create intro section",
      error,
    });
  }
};

export const getIntroSection = async (req: Request, res: Response): Promise<void> => {
  try {
    const introSection = await IntroSectionModel.find();

    res.status(200).json({
      message: "Intro section fetched successfully",
      data: introSection,
    });
  } catch (error) {
    console.error("Error fetching intro section:", error);
    res.status(500).json({
      message: "Failed to fetch intro section",
      error,
    });
  }
};

export const editIntroSection = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, ...updatedData } = req.body;
    
    if (!id) {
      res.status(400).json({ message: "Intro section ID is required in body" });
      return;
    }

    const updatedIntroSection = await IntroSectionModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedIntroSection) {
      res.status(404).json({ message: "Intro section not found" });
      return;
    }

    res.status(200).json({
      message: "Intro section updated successfully",
      data: updatedIntroSection,
    });
  } catch (error) {
    console.error("Error updating intro section:", error);
    res.status(500).json({
      message: "Failed to update intro section",
      error,
    });
  }
};
