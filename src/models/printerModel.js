import mongoose from "mongoose";

const printerSchema =new mongoose.Schema({
    PrinterID: {type: String, require: true},
    performance: {type: Boolean, require: true},
    resources: {type: Object, require: true},
    available: {type: Boolean, require: true},
})


const printerModel = mongoose.models.printer || mongoose.model('printer',printerSchema)

export default printerModel;