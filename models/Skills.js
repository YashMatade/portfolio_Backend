const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const skills = new Schema({
    skillImage: {
        type: String
    },
    heading: {
        type: String
    },
    skills: {
        type: Array
    }
});
module.exports = mongoose.model("skills", skills);