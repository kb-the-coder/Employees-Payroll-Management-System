import express from "express";
import 'dotenv/config'  
import cors from 'cors'
import db_conn from "./config/db.js"
import UserRouter from "./router/UserRouter.js";
import { employeeRouter } from "./router/EmployeeRouter.js";



const port = process.env.PORT
db_conn()
const app = express ()



app.use(express.json())
app.use(cors())

app.listen(port,()=>{
    console.log('frontend runnng well')
})
app.get('/',(req,res)=>{
    res.send('api runnng well')
})

app.use('/api',UserRouter)
app.use("/api/employee", employeeRouter);