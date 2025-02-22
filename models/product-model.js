const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String, 
    price : Number,
    discount : {
        type  : Number,
        default : 0
    },
    bgcolor : String,
    image : Buffer,
    panelcolor : String,
    textcolor  : String
})

module.exports = mongoose.model("product", productSchema);