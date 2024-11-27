import express from 'express';
import {addProcess,getAllProcess,getStudentProcess,getPrinterProcess} from '../controllers/processController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/userAuth.js';

const processRouter = express.Router();

processRouter.post('/add',addProcess)
processRouter.post('/get',getAllProcess)
processRouter.post('/getstudent',getStudentProcess)
processRouter.post('/getprinter',getPrinterProcess)

export default processRouter;