const mongoose = require("mongoose");

const reviews = new mongoose.Schema({
    rating:{
        type:Number,
        min:0,
        max:0
    },
    comment:{
        type:String,
        trim:true
    }
});


const Review = mongoose.model('Review',reviews);

module.exports = Review;