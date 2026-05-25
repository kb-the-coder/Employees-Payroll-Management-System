import express from 'express'
import { Login, register } from '../Controller/UserController.js';


const UserRouter = express.Router();

UserRouter.post('/regster',register)
UserRouter.post('/login',Login)


export default UserRouter 