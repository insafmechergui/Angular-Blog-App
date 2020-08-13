const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    text: String,
    // category: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Category'
    // }],
    // user_id: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    // date: Date
    // timestamps: { createdAt: 'created_at' }
    // timestamps: true

});
module.exports = mongoose.model("Blog", blogSchema);
