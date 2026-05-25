import mongoose from "mongoose";

const EmployeeSchema = mongoose.Schema({
  employeeNumber: { type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true},
  position: { type: String, required: true },
  hireDate: { type: Date, required: true },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "department" },
});

export const Employee = mongoose.model("employee",EmployeeSchema)