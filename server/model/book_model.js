const mongoose = require('mongoose');

const BookSchema=new mongoose.Schema({
    UserId:{
        type: String,
        required: [true,"Enter a Valid userId"],
    },
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true
    },
    BookName:{
        type:String,
        required:true
    },
    Textarea:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Select:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }

});


const BookForSell = mongoose.model('BookForSell',BookSchema);
module.exports = BookForSell;