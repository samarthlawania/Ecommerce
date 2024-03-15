const express = require('express');
const router = express.Router();
const Product = require("../models/productSchema");
const Review = require("../models/review");


router.post("/products/:id/reviews",async(req,res)=>{
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

        res.send('Review added successfully');
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).send('Error adding review');
    }
})

module.exports = router;