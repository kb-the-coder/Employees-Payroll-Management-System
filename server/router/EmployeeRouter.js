import express from 'express'
import { get, insert, remove, update } from '../Controller/EmployeeController.js'

export const employeeRouter = express.Router()

employeeRouter.post("/insert",insert)
employeeRouter.get("/get",get)
employeeRouter.put("/update/:id",update)
employeeRouter.delete("/delete", remove);