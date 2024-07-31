const mongoose = require('mongoose');
const dgbr = require('debug')("development:mongoose");
const config = require('config');

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(()=>{
    dgbr("connected");  // shows only when export DEBUG= development:* is written on terminal
})
.catch((err)=>{
    dgbr(err);
})

module.exports = mongoose.connection;