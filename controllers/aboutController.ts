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