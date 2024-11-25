import express from 'express';
import {studentLogin,adminLogin} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/stutentlogin',studentLogin)
userRouter.post('/adminlogin',adminLogin)

export default userRouter;