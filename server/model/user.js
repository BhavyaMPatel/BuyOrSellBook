const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const validator = require('validator');

const userSchema=new mongoose.Schema({
    userid:{
        type: String,
        required: [true,"Enter a Valid userId"],
        unique: [true,"Please Enter Unique UserId"]
    },
    email:{
        type:String,
        required:true,
        lowecase:true,
    },
    password:{
        type:String,
        required:true
    }

});

userSchema.statics.singup = async function (userid,email,password){

const exists = await this.findOne({userid})
if(exists) {
    throw Error('UserId already exists')
}else{
    if(!validator.isAlphanumeric(userid)){
        throw Error('Invalid User ID'); 
    }

    if(!validator.isEmail(email)){
    throw Error('Invalid email address');    
    }
const salt=await bcrypt.genSalt(10);
const hash=await bcrypt.hash(password,salt);
const user=this.create({userid,email,password:hash});
return user;
}
}

//Login Method
userSchema.statics.login=async function(userid,password){

    const user = await this.findOne({userid});

    if(!user){
    throw Error("User not found");
    }

    const match=await bcrypt.compare(password,user.password)
        
    if(!match){
        throw Error('Invalid password');
    }
    
    return user;
    

    
}


const User=mongoose.model('user',userSchema);  
module.exports = User;  