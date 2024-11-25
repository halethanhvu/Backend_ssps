import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

const studentLogin = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "đăng nhập sai" });
    }
}

const adminLogin = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "đăng nhập sai" });
    }
}

const updateBalance = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "đăng nhập sai" });
    }
}

const updataQuotas = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "đăng nhập sai" });
    }
}

export {studentLogin,adminLogin,updateBalance,updataQuotas};