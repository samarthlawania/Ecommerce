const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const PORT = 4040;
const seedDB = require('./seed');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override')
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

mongoose.connect('mongodb://localhost:27017/cbecomm')
.then(()=> console.log('Connected to db'))
.catch((err)=> console.log(`Somee err {err}`));


//seedDB();


const productroutes = require('./routes/product');
app.use(productroutes);


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})
