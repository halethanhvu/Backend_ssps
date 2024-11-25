import processModel from "../models/processModel.js";
import userModel from "../models/userModel.js";
import printerModel from "../models/printerModel.js";

const addProcess = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getAllProcess = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getStudentProcess = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

export {addProcess,getAllProcess,getStudentProcess};