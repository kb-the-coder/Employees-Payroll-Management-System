import express from "express";
import 'dotenv/config'  
import cors from 'cors'
import db_conn from "./config/db.js";

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