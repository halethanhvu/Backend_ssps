import printerModel from "../models/printerModel.js";

const addPrinter = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const deletePrinter = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getAvaiblePrinter = async (req, res) => {
    try {
        const availablePrinters = await printerModel.find({ available: true });
        res.json({ success: true,availablePrinters });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const getAllPrinter = async (req, res) => {
    try {
        const printers = await printerModel.find({});
        res.json({ success: true, printers });
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

const updatePrinter = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({success: false,message: error.message});
    }
}

export {addPrinter,getAvaiblePrinter,getAllPrinter,updatePrinter,deletePrinter};