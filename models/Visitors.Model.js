const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let VisitorsSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    contactNumber: {
        type: Number
    },
    feedBack: {
        type: String
    }
})

module.exports = mongoose.model("visitors", VisitorsSchema);