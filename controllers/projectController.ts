import { Request, Response } from "express";
import ProjectModel from "../models/projectModel";

export const createProjectDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const projectData = req.body;

    const newProject = await ProjectModel.create(projectData);

    res.status(201).json({
      message: "Project created successfully",
      data: newProject,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({
      message: "Failed to create project",
      error,
    });
  }
};

export const getProjectDetails = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await ProjectModel.find();

    res.status(200).json({
      message: "Projects fetched successfully",
      data: projects,
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      message: "Failed to fetch projects",
      error,
    });
  }
};

export const editProjectDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, ...updatedData } = req.body;

    if (!id) {
      res.status(400).json({ message: "Project ID is required in body" });
      return;
    }

    const updatedProject = await ProjectModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      res.status(404).json({ message: "Project not found" });
      return;
    }

    res.status(200).json({
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({
      message: "Failed to update project",
      error,
    });
  }
};