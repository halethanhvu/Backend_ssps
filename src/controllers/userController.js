import userModel from "../models/userModel.js";
import validator from "validator";
import jwt from "jsonwebtoken";

const JWT_SECRET="hehehe";

const createToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1h' });
};

const studentLogin = async (req, res) => {
    const { email, password } = req.body;//email

    try {
        // Tìm người dùng theo Stu_ID
        const user = await userModel.findOne({ email:email });

        // Kiểm tra nếu người dùng không tồn tại hoặc mật khẩu không đúng
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "MSSV hoặc mật khẩu không đúng" });
        }

        // Tạo JWT
        const token = createToken(user.Stu_ID);

        // Trả về thông tin người dùng và token nếu đăng nhập thành công
        res.status(200).json({ message: "Đăng nhập thành công", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Đăng nhập lỗi, vui lòng đăng nhập lại!" });
    }
};

const adminLogin = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({ email:email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: "email hoặc mật khẩu không đúng" });
        }

        if(user.role!="admin") {
            return res.status(401).json({ message: "Không phải admin" });
        }

        const token = createToken(user._id);
        res.status(200).json({ message: "Đăng nhập thành công", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "đăng nhập sai" });
    }
}

const updateBalance = async (req, res) => {
    try {
        const { Stu_ID,balance } = req.body;
    
        // Tìm và cập nhật số dư của người dùng
        const user = await userModel.findOneAndUpdate(
            { Stu_ID },
            { balance },
            { new: true }
        );

        // Kiểm tra nếu người dùng không tồn tại
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        // Trả về thông tin người dùng đã cập nhật
        res.status(200).json({ message: "Cập nhật số dư thành công", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi cập nhật số dư" });
    }
};

const getHistory = async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Lấy JWT từ header
    try {
        // Giải mã token để lấy Stu_ID
        const decoded = jwt.verify(token, JWT_SECRET);
        const { Stu_ID } = decoded;

        // Tìm người dùng trong cơ sở dữ liệu
        const user = await userModel.findOne({ Stu_ID });

        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        // Lấy lịch sử giao dịch từ trường `history` trong database
        const history = user.history; // Giả định lịch sử được lưu trong trường `history`

        // Trả về lịch sử giao dịch
        res.status(200).json({ message: "Lấy lịch sử thành công", history });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi lấy lịch sử giao dịch" });
    }
};

const updateQuotas = async (req, res) => {//??
    const { quotas } = req.body;

    try {
        // Cập nhật chỉ số quotas của tất cả người dùng có vai trò là student
        const result = await userModel.updateMany(
            { role: 'student' }, // Điều kiện để tìm tất cả người dùng có vai trò là student
            { $set: { quotas } } // Cập nhật chỉ số quotas mới
        );

        // Trả về thông tin cập nhật
        res.status(200).json({ message: "Cập nhật chỉ số quotas thành công", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi cập nhật chỉ số quotas" });
    }
};

const getBalance = async (req, res) => {
    try {
        const { Stu_ID } = req.body;

        // Tìm người dùng theo Stu_ID
        const user = await userModel.findOne({ Stu_ID });

        // Kiểm tra nếu người dùng không tồn tại
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        // Trả về balance của người dùng
        res.status(200).json({ message: "lấy chỉ số balance thành công",balance:user.balance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi lấy số dư" });
    }
};

export {studentLogin,adminLogin,updateBalance,updateQuotas, getBalance};
