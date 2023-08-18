const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const { mongodbConnection } = require("./config");

const indexRoutes = require("./routes/index");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", indexRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongodbConnection();

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App is running on ${port}`);
});