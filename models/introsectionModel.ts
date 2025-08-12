import mongoose, { Document, Schema } from "mongoose";

export interface IntroSectionDocument extends Document {
  name: string;           
  designation: string;    
  tagline: string;       
  githubUrl: string;      
  resumeUrl: string;      
  images: string[];       
}

const introSectionSchema: Schema<IntroSectionDocument> = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  tagline: { type: String, required: true },
  githubUrl: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  images: {
    type: [String],
    required: true,
    
  },
});

export default mongoose.model<IntroSectionDocument>("IntroSection", introSectionSchema);
