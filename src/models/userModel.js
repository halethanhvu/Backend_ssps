import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    Stu_ID: {type: String},
    email: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, require: true},
    balance: {type: Number},
    quotas: {type: Object},
})


const userModel = mongoose.models.user || mongoose.model('user',userSchema)

export default userModel;