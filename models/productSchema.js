const mongoose  = require('mongoose');
const Review = require('./review');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
});

productSchema.post('findOneAndDelete',async(product)=>{
    if(product.reviews.length>0){
        await Review.deleteMany({id:{$in:product.reviews}});
    }
});

const Product = mongoose.model('Product',productSchema);



module.exports = Product;