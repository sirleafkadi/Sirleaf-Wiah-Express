var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require('express-session');
var cookie_parser = require('cookie-parser');
var cors = require('cors');
let port='9090';
////database url
var url = "mongodb://localhost:27017/mydb";
var app = express();
////Middleware
app.use(require('body-parser').urlencoded({ extended: false }));
/////cookie parser
app.use(cookie_parser());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); //////Enabling require
//////Database with avoid warming
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true})
app.use(bodyParser.json());
mongoose.connections;
// mongoose.Promise= global.Promise;

//////Express Session


    app.use(session({
        name:'user',

        resave:false,
        saveUninitialized:true,
        secret:'jhgsdhghf!,*%%$6*',
        cookie:{
            maxAge: 1000*60*60,
            sameSite:true,
            httpOnly: true,
            secure:true, ///////Only for https


        }
    }));


/////////Product
var Product = require("./router/product_router");

app.use("/product", Product);

////////////category

var Category = require("./router/category_router");

app.use("/category", Category);

////////Customer
var Customer = require('./router/customer_router');
app.use('/customer', Customer);

////////Order History
var History = require('./router/order_history_router');
app.use('/order', History);

///////Sequence

var Sequence = require("./router/sequence_router");
var Cus_Sequence = require('./router/cus_sequence_router');

app.use('/sequence',Sequence);
app.use('/cus_sequence',Cus_Sequence);

// https://images-na.ssl-images-amazon.com/images/I/41tfoUf5quL._AC_.jpg
// ../assets/img/phone_cat.png

// {"_id":"1","name":"Sansumg Galaxy S8","desc":"Fast and Smooth","img":"none","cat_name":"Sansumg"}

// {"name":"Sansumg Galaxy S8" "desc":"Intelligent Battery & Super Fast Charge: Adaptive power that meets your needs with an all-day intelligent battery that learns from how you work and play to optimize battery life; Plus, Super Fast Charging boosts your battery in just minutes", "year":"2018", "model":"s180", "cpu", "Quad Core", "memory":"4", "display":"Super AMOLED", "type":"phone",   "img":"https://images-na.ssl-images-amazon.com/images/I/41tfoUf5quL._AC_.jpg","category_id":"1"}



// {
//     "name" : "Sansumg Galaxy S8",
//     "year" : "2018",
//     "model" : "s180",
//     "memory" : "4",
//     "cpu" : "Quad Core",
//     "display" : "Super AMOLED",
//     "desc" : "Intelligent Battery & Super Fast Charge: Adaptive power that meets your needs with an all-day intelligent battery that learns from how you work and play to optimize battery life; Plus, Super Fast Charging boosts your battery in just minutes",
//     "type" : "p",
//     "img" : "https://images-na.ssl-images-amazon.com/images/I/41tfoUf5quL._AC_.jpg",
//     "category_id" : "1"
  
// }
 


app.listen(port, ()=>{
    console.log(`Server is running on port:  ${port}`);
});












// {
//     "name": "Apple iPhone 11 Pro",
//     "year": "2020",
//     "model": "a123",
//     "memory": "4",
//     "cpu": "Quad Core",
//     "display": "Super AMOLED",
//     "desc": "And then there was Pro. A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
//     "type": true,
//     "img": "https://www.att.com/shopcms/media/att/2019/Shop/360s/1000467/6157C-2.jpg",
//     "price": 1100,
//     "short_desc": "Iphone 11 Pro is better than every, never miss out on speed, reliability while maintaining quality",
//     "category_id": "4",
//     "quantity": "0"
//   }