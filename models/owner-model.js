const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname : {
        type : String,
        minLength : 3,
        trim :true
    },
    email : String,
    password : String,
    product : [
        {
            type : Array,
            default : []
        }
    ],
    profile : String,
    gstIn : String
})

modules.exports = mongoose.model("owner", ownerSchema);