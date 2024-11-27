import jwt from "jsonwebtoken";

const authStudent = async (req,res,next) => {
    const {token} = req.headers;

    if(!token) {
        return res.json({success:false, message:'Not Authorized Login Again'})
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.Stu_ID = token_decode.id;
        next();

    } catch(error) { 
        console.error(error);
        res.status(500).json({ message: "Lỗi server", success: false });
    }
}

export default authStudent