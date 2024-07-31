const express = require('express');
const router = express.Router();
const {registerUser, loginUser , logoutUser} = require('../controllers/authController')
const isLoggedin = require("../middlewares/isLoggedin");
const productModel = require('../models/product-model');


router.get( "/", (req, res)=>{
    res.send("hey user");
})

router.post( "/register", registerUser );

router.post( "/login", loginUser);

router.post("/logout", async (req, res)=>{
    
});

router.get( "/create", async (req, res)=>{
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", {isLoggedin: true, success , products});
})

module.exports = router;