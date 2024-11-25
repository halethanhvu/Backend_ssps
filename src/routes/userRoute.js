import express from 'express';
import {studentLogin,adminLogin,updateBalance,updataQuotas} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/stutentlogin',studentLogin)
userRouter.post('/adminlogin',adminLogin)
userRouter.post('/updatebalance',updateBalance)
userRouter.post('/updataquotas',updataQuotas)

export default userRouter;