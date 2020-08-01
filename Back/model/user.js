
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: "Invalid Email address" });
            }
        }
    },
    password:
    {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("User", userSchema);

