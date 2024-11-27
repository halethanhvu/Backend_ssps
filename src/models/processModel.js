import mongoose from "mongoose";

const processSchema =new mongoose.Schema({
    Stu_ID: {type: String, require: true},
    PrinterID: {type: String, require: true},
    filename: {type:String, require: true},
    printProperties: {type: Object, require: true},
    starttime: {type: Number, require: true},
    endtime: {type: Number, require: true},
})


const processModel = mongoose.models.process || mongoose.model('process',processSchema)

export default processModel;