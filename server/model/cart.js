const mongoose = require('mongoose');

const CartSchema=new mongoose.Schema({
    BuyerId:{
        type: String,
    },
    BookName:{
        type:String,
        required:true
    },
});


const Cart = mongoose.model('Cart',CartSchema);
module.exports = Cart;