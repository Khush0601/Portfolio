import mongoose, { Document, Schema } from "mongoose";

export interface ProjectDocument extends Document {
  title: string;
  description: string;
  techStack: string[];
  features?: string[];
  clientRepo?: string;
  serverRepo?: string;
  demoVideo?: string;
  liveLink?: string;
  projectImage?: string;
  date?: string;
}

const projectSchema: Schema<ProjectDocument> = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [{ type: String, required: true }],
  features: [{ type: String}],
  clientRepo: { type: String },
  serverRepo: { type: String },
  demoVideo: { type: String },
  liveLink: { type: String },
  projectImage: { type: String },
  date: { type: String },
});

export default mongoose.model<ProjectDocument>("projectDetails", projectSchema);
