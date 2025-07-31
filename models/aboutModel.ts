import mongoose, { Document, Schema } from "mongoose";

export interface AboutDocument extends Document {
  name: string;
  profileImage: string;
  college: string;
  branch: string;
  cgpa: string;
  session: string;
  email: string;
  linkedin: string;
  github: string;
  aboutLines: string[];
  phoneNo: string; 
  portfolioTitle: string;
  currentLocation: string;
  resumeLink: string;
}

const aboutSchema: Schema<AboutDocument> = new Schema({
  name: { type: String, required: true },
  profileImage: { type: String, required: true },
  college: { type: String, required: true },
  branch: { type: String, required: true },
  cgpa: { type: String, required: true },
  session: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  aboutLines: [{ type: String, required: true }],
  phoneNo: { type: String, required: true },
  portfolioTitle: { type: String, required: true },
  currentLocation: { type: String, required: true },
  resumeLink: { type: String, required: true }
});


export default mongoose.model<AboutDocument>("aboutDetails", aboutSchema);