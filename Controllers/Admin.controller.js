const Admin = require("../models/Admin");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let admin = await Admin.findOne({ email, password });
        if (!admin) {
            res.status(200).json({ err: 300, msg: "You are not Admin" });
        } else {
            res.status(200).json({ err: 200, msg: "Logged in successfully" });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
}