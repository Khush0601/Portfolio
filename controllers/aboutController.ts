import { Request, Response } from "express";
import AboutModel from "../models/aboutModel"

export const createAboutDetails = async (req: Request, res: Response): Promise<void> => {
  try{
   const aboutData=req.body;
  
   const saveAboutData=await AboutModel.create(aboutData);
   res.status(201).json({
    message:"about details created Successfully",
    data:saveAboutData,
   })
  }
  catch(error){
   console.error("Error creating about details:", error);
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getAboutDetails=async(req:Request,res:Response):Promise<void>=>{
  try{
    const aboutDetails = await AboutModel.find({}); 
    res.status(200).json({
      message: "About details fetched successfully",
      data: aboutDetails,
    });
  }
  catch(err){
    console.error("Error fetching about details:", err);
    res.status(500).json({
      message: "Failed to fetch about details",
      error: err,
    });
  }
}

export const editAboutDetails=async(req:Request,res:Response):Promise<void>=>{
  try{
   const updatedData = req.body;

    const updatedAbout = await AboutModel.findOneAndUpdate({}, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedAbout) {
      res.status(404).json({ message: "No about details found to update" });
      return;
    }

    res.status(200).json({
      message: "About details updated successfully",
      data: updatedAbout,
    });
  }
  catch(err){
   console.error("Error updating about details:", err);
    res.status(500).json({
      message: "Something went wrong while updating",
      error: err,
    });
  }
}