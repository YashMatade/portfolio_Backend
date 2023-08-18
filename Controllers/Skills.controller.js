const skillModel = require("../models/Skills");
const { findById, findByIdAndUpdate } = require("../models/Visitors.Model");
exports.create = async (req, res) => {
    try {
        const { heading, skills } = req.body
        let existingSkill = await skillModel.findOne({ heading });
        if (existingSkill) {
            res.status(200).json({ err: 300, msg: "Skill already exists" })
        } else {
            let newSkillset = new skillModel({
                heading, skills
            })
            if (req.file) {
                newSkillset.skillImage = req.file.filename
            }
            let data = await newSkillset.save();
            res.status(200).json({ err: 200, msg: "New Skill Added", data });
        }
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
}

exports.update = async (req, res) => {
    try {
        const { skillId, heading, skills } = req.body;
        let updateSkill = {
            heading, skills
        }
        if (req.file) {
            updateSkill.skillImage = req.file.filename
        }
        let updatedSkill = await skillModel.findByIdAndUpdate(skillId, updateSkill, { new: true })
        if (!updatedSkill) {
            res.status(200).json({ err: 300, msg: "Failed to update skill" });
        } else {
            res.status(200).json({ err: 200, msg: "Skill updated successfully", data: updatedSkill });
        }

    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
};


exports.delete = async (req, res) => {
    try {
        const { skillId } = req.body;
        await skillModel.findByIdAndDelete(skillId);
        res.status(200).json({ err: 200, msg: "Skill deleted successfully" });
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
}

exports.getlist = async (req, res) => {
    try {
        let list = await skillModel.find({});
        if (list) {
            res.status(200).json({ err: 200, msg: "list found successfully", data: list });
        } else {
            res.status(200).json({ err: 200, msg: "List Not found" });
        }
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
}

exports.getskill = async (req, res) => {
    try {
        const { skillId } = req.body;
        let skill = await skillModel.findOne({ _id: skillId })
        res.status(200).json({ err: 200, msg: "Skill found", data: skill });
    } catch (error) {
        res.status(500).json({ err: 500, msg: error.toString() });
    }
}