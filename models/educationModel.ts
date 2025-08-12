import mongoose, { Document, Schema } from "mongoose";

export interface EducationDocument extends Document {
  qualification: string;   
  institution: string;    
  startDate: string;       
  endDate: string;        
  logoUrl: string;        
  description?: string;     
}

const educationSchema: Schema<EducationDocument> = new mongoose.Schema({
  qualification: { type: String, required: true },
  institution: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  logoUrl: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<EducationDocument>(
  "educationDetails",
  educationSchema
);
