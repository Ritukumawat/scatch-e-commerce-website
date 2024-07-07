const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');

if( process.env.NODE_ENV === "development"){
    router.post("/create", async ( req , res)=>{
        let owners = await ownerModel.find();
        if( owners.length > 0 ){
            return res
            .send("you don't have permission to create a new user");
        }
        res.send( "you can create a new user");    
    })
}

router.get( "/", (req, res)=>{
    res.send("hey owner");
})



module.exports = router;