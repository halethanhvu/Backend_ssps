import mongoose from "mongoose";

const processSchema =new mongoose.Schema({
    Stu_ID: {type: String, require: true},
    PrinterID: {type: String, require: true},
    filename: {type:String, require: true},
    time: {type: Number, require: true},
    printProperties: {type: Object, require: true},
})


const processModel = mongoose.models.process || mongoose.model('process',processSchema)

export default processModel;