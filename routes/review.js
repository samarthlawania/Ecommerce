const express = require('express');
const router = express.Router();
const Product = require("../models/productSchema");
const Review = require("../models/review");
const {validateReview} = require('../middleware');

router.post("/products/:id",validateReview,async(req,res)=>{
    const {id} = req.params;
    const {rating ,comment} = req.body;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const review = new Review({ rating, comment });

        product.reviews.push(review); 
        await review.save();

        await product.save();

        console.log('Review added:', review);

        res.redirect(`/products/${id}`);
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).send('Error adding review');
    }
})

module.exports = router;