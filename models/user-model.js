const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : String,
    contact : Number,
    email : String,
    password : String,
    cart : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "product"
        }
    ],
    orders : [],
    profile : String
})

module.exports = mongoose.model("user", userSchema);