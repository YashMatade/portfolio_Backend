const VisitorsModel = require("../models/Visitors.Model");

exports.create = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            contactNumber,
            feedBack
        } = req.body

        let newVisitor = new VisitorsModel({
            firstName,
            lastName,
            email,
            contactNumber,
            feedBack
        });
        console.log(req.body);
        let newVisi = await newVisitor.save();
        if (newVisi) {
            res.status(200).json({ err: 200, msg: "Data addded successfully", data: newVisi });
        }
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
}