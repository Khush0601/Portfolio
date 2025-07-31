import { Request, Response } from "express";
import SkillModel from "../models/skillModel"

export const createSkillsDetails = async (req: Request, res: Response): Promise<void> => {
  try{
   const skillsData=req.body;
  
   const saveSkillsData=await SkillModel.create(skillsData);
   res.status(201).json({
    message:"about details created Successfully",
    data:saveSkillsData,
   })
  }
  catch(error){
   console.error("Error creating skills details:", error);
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getAllSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const skills = await SkillModel.find();

    res.status(200).json({
      message: "Skills fetched successfully",
      data: skills,
    });
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({
      message: "Failed to fetch skills",
      error,
    });
  }
};

export const editSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, ...updatedData } = req.body;

    if (!id) {
      res.status(400).json({ message: "Skill ID is required in body" });
      return;
    }

    const updatedSkill = await SkillModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedSkill) {
      res.status(404).json({ message: "Skill not found" });
      return;
    }

    res.status(200).json({
      message: "Skill updated successfully",
      data: updatedSkill,
    });
  } catch (error) {
    console.error("Error updating skill:", error);
    res.status(500).json({
      message: "Failed to update skill",
      error,
    });
  }
};