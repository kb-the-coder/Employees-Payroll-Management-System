import mongoose from "mongoose";

const DepartmentSchema = mongoose.Schema({
  departmentCode: { type: String, required: true, unique: true },
  departmentName: { type: String, required: true},
  grossSalary: { type: Number, required: true},
});

export const Department = mongoose.model("department",DepartmentSchema)
