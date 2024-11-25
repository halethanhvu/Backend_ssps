import express from 'express';
import {addProcess,getAllProcess,getStudentProcess} from '../controllers/processController.js';
import upload from '../middleware/multer.js';

const processRouter = express.Router();

processRouter.post('/add',addProcess)
processRouter.post('/get',getAllProcess)
processRouter.post('/getstudent',getStudentProcess)

export default processRouter;