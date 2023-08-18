const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projects = new Schema({
    projectName: {
        type: String
    },
    projectImg: {
        type: String
    },
    description: {
        type: String
    },
    techUsed: {
        type: Array
    },
    projecturl: {
        type: String
    }
}, { timeStamps: true });

module.exports = mongoose.model("projects", projects);