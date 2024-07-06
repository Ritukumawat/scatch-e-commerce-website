const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String, 
    price : Number,
    discount : {
        type  : Number,
        default : 0
    },
    bgcolor : String,
    image : String,
    panelcolor : String,
    textcolor  : String
})

modules.exports = mongoose.model("product", productSchema);