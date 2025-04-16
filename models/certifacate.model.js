import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    applicationType: { type: String, required: true },
    applicationNumber: { type: String, required: true },
    name: { type: String, required: true },
    arabicName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    nationality: { type: String, required: true },
    gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"], required: true },
    passportNo: { type: String, required: true },
    civilNo: { type: String, required: true },
    sponsor: { type: String },
    category: { type: String },
    ValidityoftheMedical: { type: Date },
    to: { type: Date },
    MedicalCenter: { type: String },
    uniqueValue: { type: String, required: true, unique: true },
  },
  {
    timestamps: true, // adds createdAt & updatedAt fields
  }
);

export const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
