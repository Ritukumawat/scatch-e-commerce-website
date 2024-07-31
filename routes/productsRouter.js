const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');
const isLoggedin = require('../middlewares/isLoggedin');

router.get( "/create",isLoggedin, (req, res)=>{
    let success = req.flash("success");
    res.render("createProducts", {success});
})

router.post( "/create", upload.single("image"), async (req, res)=>{
    try{let { name, price, discount, bgcolor, panelcolor, textcolor} = req.body;

    let product = await productModel.create({
        image : req.file.buffer,
        name,
        price,
        discount,
        textcolor,
        panelcolor,
        bgcolor
    });

    req.flash("success","product created successfully");
    res.redirect("/products/create");
    }
    catch(err){
        res.send( err.message );
    }
})

module.exports = router;