const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');


const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('../config/mongoose-connection')

// console.log(process.env.NODE_ENV);
// $env:NODE_ENV="development"

if( process.env.NODE_ENV === "development"){
    router.post("/create",async (req, res)=>{
        let owners = await ownerModel.find();
        if( owners.length >0 ){
            return res
            .status(503)
            .send("you dont have the permission to create a new owner")
        }

        let { fullname, email , password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        });

        res.status(201).send("Created Owner");
    })
}

router.get( "/admin", (req, res)=>{
    let success = {};
    res.render("admin");
})




module.exports = router;