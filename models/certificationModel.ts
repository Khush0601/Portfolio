import mongoose, { Document, Schema } from "mongoose";

export interface CertificationDocument extends Document {
  title: string;
  company: {
    name: string;
    logo?: string;
  };
  date: string;
  description: string;
  certificateLink: string;
  
}

const certificationSchema: Schema<CertificationDocument> = new mongoose.Schema({
  title: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    logo: { type: String, required: true },
  },
  date: { type: String, required: true },
  description: { type: String, required: true },
  certificateLink: { type: String, required: true }
});

export default mongoose.model<CertificationDocument>("certificationDetails", certificationSchema);
