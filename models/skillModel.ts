import mongoose, { Document, Schema } from "mongoose";

export interface SkillDocument extends Document{
    name: string;
  image: string;
}

const skillSchema: Schema<SkillDocument> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

export default mongoose.model<SkillDocument>("skillDetails", skillSchema);