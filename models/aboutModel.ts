import mongoose, { Document, Schema } from "mongoose";

export interface AboutDocument extends Document {
  
  aboutLines: string[];
  personalDetails: {
    label: string;
    value: string;
  }[];
  
}

const aboutSchema: Schema<AboutDocument> = new Schema({
  aboutLines: [{ type: String, required: true }],
   personalDetails:[ {
    label: { type: String, required: true },
    value: { type: String, required: true },
  }],
  
});


export default mongoose.model<AboutDocument>("aboutDetails", aboutSchema);