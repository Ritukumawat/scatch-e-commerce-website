const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : String,
    contact : Number,
    isAdmin : Boolean,
    email : String,
    password : String,
    cart : [
        {
            type : Array,
            default : []
        }
    ],
    orders : [],
    profile : String
})

modules.exports = mongoose.model("user", userSchema);