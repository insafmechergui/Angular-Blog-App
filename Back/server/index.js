const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require('./userRoute');
const blogRoute = require('./blogRoute');
const categoryRoute = require('./categoryRoute');
require('dotenv').config();

const app = express()

// mongoose.connect(
//     process.env.MONGODB_URI || `mongodb://localhost:27017/blogProject`,
//     { useUnifiedTopology: true, useNewUrlParser: true }
// );

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("mongoose is connected"));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));

// app.use(express.static("client"));

app.use('/', userRoute);
app.use('/', blogRoute);
app.use('/', categoryRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});