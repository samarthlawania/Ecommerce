const express = require('express');
const router = express.Router();
const Product = require("../models/productSchema");
const Review = require("../models/review");

router.get("/products",async (req,res)=>{
    const products = await Product.find({});
    res.render('products/index',{products});
})


router.get("/products/new",(req,res)=>{
    res.render("products/new");
})

router.post("/products", async(req,res)=>{
    const {name,img,price,desc} = req.body;
    await Product.create({name,img,price,desc});
    res.redirect("/products");
})


router.get("/products/:id",async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
   // console.log(product);
    res.render('products/show',{product});
})


router.get("/products/:id/edit",async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/edit",{product});
});

router.patch("/products/:id",async(req,res)=>{
    const {id} = req.params;
    const {name,img,price,desc} = req.body;
    await Product.findByIdAndUpdate(id,{name,img,price,desc});
    res.redirect(`/products/${id}`);
});

module.exports = router;