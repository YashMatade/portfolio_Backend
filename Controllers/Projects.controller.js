const projectModel = require("../models/Projects");

exports.create = async (req, res) => {
    try {
        const { projectName, description, techUsed, projecturl } = req.body;
        let existingProject = await projectModel.findOne({ projectName });
        if (existingProject) {
            res.status(200).json({ err: 300, msg: "Project already exists" })
        } else {
            let newProject = new projectModel({
                projectName, description, techUsed, projecturl
            });
            if (req.file) {
                newProject.projectImg = req.file.filename
            }
            let data = await newProject.save();
            res.status(200).json({ err: 200, msg: "Project saved successfully", data })
        }
    } catch (error) {
        res.status(500).json({ err: error.toString() })
    }
}

exports.update = async (req, res) => {
    try {
        const { projectId, projectName, description, techUsed, projecturl } = req.body;

        let update = {
            projectName, description, techUsed, projecturl
        }

        if (req.file) {
            update.projectImg = req.file.filename
        }

        let updatedProject = await projectModel.findByIdAndUpdate(projectId, update, { new: true });
        if (!updatedProject) {
            res.status(200).json({ err: 300, msg: "Failed to update project" })
        } else {
            res.status(200).json({ err: 200, msg: "Project updated successfully", data: updatedProject });
        }
    } catch (error) {
        res.status(500).json({ err: error.toString() })
    }
}
exports.delete = async (req, res) => {
    try {
        const { projectId } = req.body;
        await projectModel.findByIdAndDelete(projectId);
        res.status(200).json({ err: 200, msg: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ err: error })
    }
}
exports.getlist = async (req, res) => {
    try {
        let list = await projectModel.find({}).sort({ createdAt: -1 });
        if (list.length === 0) {
            res.status(200).json({ err: 300, msg: "List not found" })
        } else {
            res.status(200).json({ err: 200, msg: "List found successfully", data: list });
        }
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

exports.getProject = async (req, res) => {
    try {
        const { projectId } = req.body;
        let project = await projectModel.findOne({ _id: projectId });
        res.status(200).json({ err: 200, msg: "Project found successfully", data: project });

    } catch (error) {
        res.status(500).json({ err: error })
    }
}
