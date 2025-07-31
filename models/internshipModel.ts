import mongoose, { Document, Schema } from "mongoose";

export interface InternshipDocument extends Document {
  companyName: string;
  title: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  certificateLink: string;
}

const internshipSchema: Schema<InternshipDocument> = new mongoose.Schema({
  companyName: { type: String, required: true },
  title: { type: String, required: true },
  duration: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },
  certificateLink: { type: String, required: true },
});

export default mongoose.model<InternshipDocument>("internshipDetails", internshipSchema);
