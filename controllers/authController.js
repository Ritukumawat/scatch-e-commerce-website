const userModel = require("../models/user-model")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken')
const productModel = require('../models/product-model');
const isLoggedin = require("../middlewares/isLoggedin");

module.exports.registerUser =  async  (req, res)=>{
    try{
        let {email, username, password} = req.body;

        let user = await userModel.findOne({email});
        if( user) return res.status(402).send("already have an account.");

        bcrypt.genSalt( 10, (err, salt)=>{
            bcrypt.hash( password, salt, async (err, hash)=>{
                if(err) return res.send(err.message);
                
                let user = await userModel.create({
                    email,
                    username,
                    password : hash
                })

                let token = generateToken( user);
                res.cookie("token", token);
                req.flash("success","user registered successfully");
                res.redirect("/users/create");
            })
        })

    }catch(err){
        res.send( err.message);
    }
}

module.exports.loginUser = async (req, res)=>{

    let { email, password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.send("wrong email or password");

    bcrypt.compare( password, user.password ,async (err, result)=>{
        if(result){
            let token = generateToken(user);
            res.cookie( "token", token);

            let products = await productModel.find();
            let success = {};
            res.render("shop", {products , success});
        }else{
            res.send("wrong email or password");
        }
    })
}

