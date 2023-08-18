const mongoose = require("mongoose");
exports.mongodbConnection = () => {
    mongoose.connect("mongodb+srv://matadeyash1:V6nZ57EiPGjUR3zc@cluster0.n24lukb.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("error occured" + error);
    })
}